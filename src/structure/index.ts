import { Client } from "discord.js";
import { runSlashCommands } from "./application/slashCommands";
import { runCommands } from "./handlers/commandHandler";
import { runEvents } from "./handlers/eventHandler";

const runIndex = (client: Client) => {
  runSlashCommands();
  runEvents(client);
  runCommands(client);
  return;
};

export { runIndex };
