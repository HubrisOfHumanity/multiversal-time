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
		await interaction.reply('Pong!');
	}
	else if (commandName === 'serverinfo') {
		await interaction.reply(`Server name: ${interaction.guild.name} \
									Server owner: ${interaction.guild.ownerId} \
									Total members: ${interaction.guild.memberCount} \
									Online: ${(interaction.guild.members.cache.filter(member => member.presence.status !== 'offline').size)} \
									Server created: ${interaction.guild.createdAt}`);
	}
	else if (commandName === 'userinfo') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\
									Your id: ${interaction.user.id}`);
	}
});

// Login to Discord with your client's token
client.login(token);