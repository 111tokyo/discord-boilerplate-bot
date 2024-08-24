"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommands = void 0;
const discord_js_1 = require("discord.js");
const runCommands = (client) => {
    client.on(discord_js_1.Events.InteractionCreate, (interaction) => {
        if (interaction.isCommand()) {
            require(`../../master/commands/${interaction.commandName}`).handleCommand(client, interaction);
        }
    });
    return;
};
exports.runCommands = runCommands;
//# sourceMappingURL=commandHandler.js.map