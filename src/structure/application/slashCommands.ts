import { installCommands } from "../util/installCommands";
import { commandType } from "../util/types";

const runSlashCommands = () => {
  const testCommand: commandType = {
    name: "test",
    type: 1,
    description: "test",
  };

  const allCommand = [testCommand];

  installCommands(allCommand);
  return;
};

export { runSlashCommands };
