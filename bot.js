const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.sendMessage('pong');
  	}
});

client.on('message', message => {
    if (message.author.bot) return undefined;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    
    if(command === 'ihs.'){
        message.channel.send('my master!');
    }
    
    if (command === 'avatar') {
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
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

client.on('message', message => {
  if (message.content === '!snek') {
    message.channel.send("It's me, Snek!",{files:["https://i.imgur.com/JzYm9q7.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!gbfs') {
    message.channel.send( {files:["https://i.imgur.com/6tLrau1.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!bea') {
    message.channel.send( {files:["https://i.imgur.com/QkFvO2v.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!hitme') {
    message.channel.send("Hit me!!",{files:["https://i.imgur.com/TVpXU3V.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!scary') {
    message.channel.send({files:["https://i.imgur.com/CQPF2tc.gif"]});
  }
});

client.on('message', message => {
  if (message.content === '!wow') {
    message.channel.send("☆ **WOW !** ☆",{files:["https://gbf.wiki/images/0/06/Stamp57jp.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!teehee') {
    message.channel.send("Tee-Hee〜★",{files:["https://gbf.wiki/images/8/8f/Stamp142jp.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!nani') {
    message.channel.send("N.. Nani !?",{files:["https://i.imgur.com/3gRthTt.jpg"]});
  }
});

client.on('message', message => {
  if (message.content === '!huh') {
    message.channel.send("Huh?",{files:["https://cdn.discordapp.com/attachments/168749859111698432/457664238446444546/C6.png"]});
  }
});

client.on('message', message => {
  if (message.content === '!zoi') {
    message.channel.send({files:["http://i.imgur.com/yJ35t3i.png"]});
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
