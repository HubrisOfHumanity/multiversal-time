const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Displays your information.'),
	async execute(interaction) {
		await interaction.reply(`> **Your tag:** ${interaction.user.tag}\n> **Your id:** ${interaction.user.id}\n`);
	},
};