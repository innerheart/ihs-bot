const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU0OTY5OTYzMjMzNTQyMTY0.Df6U2w.PABgD0Gwff1XwyhQCCA9-dSVdQY);
