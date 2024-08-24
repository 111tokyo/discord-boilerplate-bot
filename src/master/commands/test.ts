import { Client, CommandInteraction } from "discord.js";

const handleCommand = (client: Client, interaction: CommandInteraction) => {
  interaction.reply({ content: "test", ephemeral: true });
};

export { handleCommand };
