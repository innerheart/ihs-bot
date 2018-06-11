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
    message.channel.send(message.author.avatarURL);
  }
});

client.on('message', message => {
  if (message.content === '!husbando') {
    message.channel.send("https://pbs.twimg.com/media/DfOB3DqWkAE83ZJ.jpg:large");
  }
});

client.on('message', message => {
  if (message.content === '!poker') {
    message.channel.send( {files:["https://i.imgur.com/mQR1csw.png"]});
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
