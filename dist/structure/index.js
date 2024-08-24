"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runIndex = void 0;
const slashCommands_1 = require("./application/slashCommands");
const commandHandler_1 = require("./handlers/commandHandler");
const eventHandler_1 = require("./handlers/eventHandler");
const runIndex = (client) => {
    (0, slashCommands_1.runSlashCommands)();
    (0, eventHandler_1.runEvents)(client);
    (0, commandHandler_1.runCommands)(client);
    return;
};
exports.runIndex = runIndex;
//# sourceMappingURL=index.js.map