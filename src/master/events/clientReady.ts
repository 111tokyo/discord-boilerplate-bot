import { ActivityType, Client } from "discord.js";

const runClientReady = (client: Client) => {
  let activityType: ActivityType = ActivityType.Custom;

  if (process.env.CLIENT_ACTIVITY_TYPE === "CUSTOM") {
    activityType = ActivityType.Custom;
  }
  if (process.env.CLIENT_ACTIVITY_TYPE === "WATCHING") {
    activityType = ActivityType.Watching;
  }
  if (process.env.CLIENT_ACTIVITY_TYPE === "COMPETING") {
    activityType = ActivityType.Competing;
  }
  if (process.env.CLIENT_ACTIVITY_TYPE === "LISTENING") {
    activityType = ActivityType.Listening;
  }
  if (process.env.CLIENT_ACTIVITY_TYPE === "PLAYING") {
    activityType = ActivityType.Playing;
  }

  client.user?.setPresence({
    activities: [
      {
        type: activityType,
        name: process.env.CLIENT_ACTIVITY_NAME ?? "Ready!",
      },
    ],
    status: "online",
  });

  console.log(`✅ ${client.user?.username} is now ready!`);
  return;
};

export { runClientReady };
