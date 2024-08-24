"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEvents = void 0;
const discord_js_1 = require("discord.js");
const clientReady_1 = require("../../master/events/clientReady");
const runEvents = (client) => {
    client.on(discord_js_1.Events.ClientReady, (readyClient) => {
        (0, clientReady_1.runClientReady)(readyClient);
    });
    return;
};
exports.runEvents = runEvents;
//# sourceMappingURL=eventHandler.js.map