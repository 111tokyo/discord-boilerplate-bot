import { Client, Events } from "discord.js";
import { runClientReady } from "../../master/events/clientReady";

const runEvents = (client: Client) => {
  client.on(Events.ClientReady, (readyClient: Client) => {
    runClientReady(readyClient);
  });
  return;
};

export { runEvents };
