const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Displays server information.'),
	async execute(interaction) {
		await interaction.reply(`> **Server name:** ${interaction.guild.name}\n> **Server owner**: ${(await interaction.guild.fetchOwner()).user.username}\n > **Total members:** ${interaction.guild.memberCount}\n> **Server created:** ${interaction.guild.createdAt}\n`);
	},
};