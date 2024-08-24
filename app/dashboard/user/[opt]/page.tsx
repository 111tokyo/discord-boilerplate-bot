"use client"

export default function userDashboard() {
  return (
    <>
     <h1>{localStorage.getItem("username")}</h1>
    </>
  );
}
