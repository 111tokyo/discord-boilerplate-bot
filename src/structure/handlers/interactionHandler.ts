import { Client, Events } from "discord.js";

const runInteractions = (client: Client) => {
  client.on(Events.InteractionCreate, (interaction) => {
    if (interaction.isCommand()) return;
    if (interaction.isAnySelectMenu()) {
      require(`../../master/interactions/selectMenus/${interaction.customId}`).handleCommand(
        client,
        interaction
      );
    }
    if (interaction.isButton()) {
      require(`../../master/interactions/buttons/${interaction.customId}`).handleCommand(
        client,
        interaction
      );
    }
    if (interaction.isModalSubmit()) {
      require(`../../master/interactions/modals/${interaction.customId}`).handleCommand(
        client,
        interaction
      );
    }
  });
  return;
};

export { runInteractions };
