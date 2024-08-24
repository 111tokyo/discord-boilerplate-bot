import { Client } from "discord.js";
import { runIndex } from "./structure";
require("dotenv").config();

const client: Client = new Client({
  intents: Array(),
});

runIndex(client);

client.login(process.env.APPLICATION_TOKEN);
