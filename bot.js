const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
client.on('message', message => {
    if (message.content === '!random') {
    	message.reply(Math.floor(Math.random() * 100) + 1);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
