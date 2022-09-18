const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zapme')
		.setDescription('Sends a bolt of electricity your way!'),
	async execute(interaction) {
		await interaction.reply(`> <@${interaction.user.id}>\n> *Zap!*`);
		return;
	},
};