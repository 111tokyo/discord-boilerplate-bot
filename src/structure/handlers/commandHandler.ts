import { Client, Events } from "discord.js";

const runCommands = (client: Client) => {
  client.on(Events.InteractionCreate, (interaction) => {
    if (interaction.isCommand()) {
      require(`../../master/commands/${interaction.commandName}`).handleCommand(
        client,
        interaction
      );
    }
  });
  return;
};

export { runCommands };
