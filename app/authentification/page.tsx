"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

require("dotenv").config();

export default function Authentification() {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const authCode = searchParams.get("code");
  const clientId = process.env.APP_ID;
  const clientSecret = process.env.APP_SECRET;

  // Ensure useEffect is not called conditionally
  const isAuthParamsValid = clientId && clientSecret && authCode;

  useEffect(() => {
    if (!isAuthParamsValid) {
      console.log("error 111");
      return;
    }

    const getToken = async () => {
      const data = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: pathName,
      });

      const tokenRequest = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }).then((response) => response.json());

      if (!tokenRequest.access_token) return;

      localStorage.setItem("token", tokenRequest.access_token);
    };

    const getUser = async () => {
      await getToken();

      const token = localStorage.getItem("token");
      if (!token) return;

      const userDatas = await fetch("https://discord.com/api/v10/users/@me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await userDatas.json();

      localStorage.setItem("username", user.username);
      localStorage.setItem("globalname", user.global_name);
      localStorage.setItem("avatarcode", user.avatar);
      localStorage.setItem("id", user.id);

      window.location.href = pathName.replace("authentification", "dashboard/user/@1");
    };

    getUser();
  }, [authCode, clientId, clientSecret, pathName, isAuthParamsValid]);

  // Ensure the return is outside useEffect
  if (!isAuthParamsValid) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-background" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-background" />
      </div>
    </>
  );
}