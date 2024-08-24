"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runReloadCommands = void 0;
const commands_1 = require("../util/commands");
const runReloadCommands = () => {
    const testCommand = {
        name: "test",
        type: 1,
        integration_types: [1],
        description: "test",
        contexts: [0, 1, 2],
    };
    const allCommand = [testCommand];
    (0, commands_1.installCommands)(allCommand);
    return;
};
exports.runReloadCommands = runReloadCommands;
//# sourceMappingURL=reload.js.map