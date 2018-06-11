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
    channel.send(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === '!husbando') {
    channel.send('https://pbs.twimg.com/media/DfOB3DqWkAE83ZJ.jpg:large');
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
