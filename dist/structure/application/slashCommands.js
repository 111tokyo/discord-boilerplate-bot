"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSlashCommands = void 0;
const installCommands_1 = require("../util/installCommands");
const runSlashCommands = () => {
    const testCommand = {
        name: "test",
        type: 1,
        description: "test",
    };
    const allCommand = [testCommand];
    (0, installCommands_1.installCommands)(allCommand);
    return;
};
exports.runSlashCommands = runSlashCommands;
//# sourceMappingURL=slashCommands.js.map