const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./auth.json');

// Configure logger settings

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);