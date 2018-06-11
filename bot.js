const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.sendMessage('pong');
  	}
});

client.on('message', message => {
  if (message.content === '!avatar') {
    message.channel.sendMessage(file:'message.author.avatarURL');
  }
});

client.on('message', message => {
  if (message.content === '!husbando') {
    message.channel.sendMessage(file:'https://pbs.twimg.com/media/DfOB3DqWkAE83ZJ.jpg:large');
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
