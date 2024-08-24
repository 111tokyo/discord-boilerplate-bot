import { commandType } from "./types";

require("dotenv").config();

const installCommands = async (commands: commandType[]) => {
  const endpoint = `applications/${process.env.APPLICATION_ID}/commands`;

  try {
    await discordRequest(endpoint, { method: "PUT", body: commands });
  } catch (err) {
    console.error(err);
  }
};

const discordRequest = async (endpoint: string, options: any) => {
  const url = "https://discord.com/api/v10/" + endpoint;

  if (options.body) options.body = JSON.stringify(options.body);
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.APPLICATION_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
      "User-Agent":
        "DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)",
    },
    ...options,
  });

  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  return res;
};

export { installCommands };
