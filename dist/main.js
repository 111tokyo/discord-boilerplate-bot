"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structure_1 = require("./structure");
require("dotenv").config();
const client = new discord_js_1.Client({
    intents: Array(),
});
(0, structure_1.runIndex)(client);
client.login(process.env.APPLICATION_TOKEN);
//# sourceMappingURL=main.js.map