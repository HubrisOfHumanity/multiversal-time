const { SlashCommandBuilder } = require('discord.js');
const { DateTime } = require('luxon');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chrono')
		.setDescription('Displays key timezone information.'),
	async execute(interaction) {
		const local = DateTime.local();
		const time_aus = local.setZone('Australia/Melbourne').toLocaleString({ year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', weekday: 'short' }).toString();
		const time_ph = local.setZone('Asia/Manila').toLocaleString({ year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', weekday: 'short' }).toString();
		const time_qa = local.setZone('Asia/Qatar').toLocaleString({ year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', weekday: 'short' }).toString();
		await interaction.reply(`> <@${interaction.user.id}>\n> **Australia:** ${time_aus}\n> **Philippines:** ${time_ph}\n> **Qatar:** ${time_qa}`);
	},
};