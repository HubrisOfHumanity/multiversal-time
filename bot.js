const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Configure logger settings

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('> Pong!');
	}
	else if (commandName === 'serverinfo') {
		await interaction.reply(`> **Server name:** ${interaction.guild.name}\n> **Server owner**: ${(await interaction.guild.fetchOwner()).user.username}\n > **Total members:** ${interaction.guild.memberCount}\n> **Server created:** ${interaction.guild.createdAt}\n`);
	}
	else if (commandName === 'userinfo') {
		await interaction.reply(`> **Your tag:** ${interaction.user.tag}\n> **Your id:** ${interaction.user.id}\n`);
	}
});

// Login to Discord with your client's token
client.login(token);