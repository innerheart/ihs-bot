const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    //if (message.author.bot) return undefined;
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    
    if(command === 'test'){
        message.channel.send('hello test');
    }
    
    if(command === 'ping'){
        message.channel.send('Pong! Your ping is ' + `${Date.now() - message.createdTimestamp}` + ' ms');
    }
    
    if(command === 'husbando'){
        message.channel.send({files:["https://pbs.twimg.com/media/DfOB3DqWkAE83ZJ.jpg"]});
    }
    
    if(command === 'poker'){
        message.channel.send({files:["https://i.imgur.com/mQR1csw.png"]});
    }
    
    if(command === 'poker2'){
        message.channel.send({files:["https://i.imgur.com/G8Ja2KN.png"]});
    }
    
    if(command === 'snek'){
        message.channel.send("It's me, Snek!",{files:["https://i.imgur.com/JzYm9q7.png"]});
    }
    
    if(command === 'gbfs'){
        message.channel.send({files:["https://i.imgur.com/6tLrau1.png"]});
    }
    
    if(command === 'bea'){
        message.channel.send({files:["https://i.imgur.com/QkFvO2v.png"]});
    }
    
    if(command === 'hitme'){
        message.channel.send("**HIT ME !!**",{files:["https://i.imgur.com/TVpXU3V.png"]});
    }
    
    if(command === 'scary'){
        message.channel.send({files:["https://i.imgur.com/CQPF2tc.gif"]});
    }
    
    if(command === 'wow'){
        message.channel.send("☆ **WOW !** ☆",{files:["https://gbf.wiki/images/0/06/Stamp57jp.png"]});
    }
    
    if(command === 'teehee'){
        message.channel.send("Tee-Hee〜★",{files:["https://gbf.wiki/images/8/8f/Stamp142jp.png"]});
    }
    
    if(command === 'nani'){
        message.channel.send("N.. Nani ?",{files:["https://i.imgur.com/3gRthTt.jpg"]});
    }
    
     if(command === 'huh'){
        message.channel.send("Huh?",{files:["https://cdn.discordapp.com/attachments/168749859111698432/457664238446444546/C6.png"]});
    }
    
    if(command === 'zoi'){
        message.channel.send({files:["http://i.imgur.com/yJ35t3i.png"]});
    }
    
    if(command === 'fuk'){
        message.channel.send({files:["https://pbs.twimg.com/media/DaC-iHXU0AA-gZF.jpg"]});
    }
    
    if(command === 'fuk2'){
        message.channel.send({files:["https://pbs.twimg.com/media/DaALwdkU0AIUvbS.jpg"]});
    }
    
    if(command === 'lyria'){
        message.delete();
        message.channel.send({files:["https://pbs.twimg.com/media/DaBD457UwAA9w4T.jpg"]});
    }
    
    if(command === 'money'){
        message.delete();
        message.channel.send({files:["https://i.imgur.com/De3IcqZ.gif"]});
    } 
    
    if(command === '?'){
        message.channel.send({files:["https://gbf.wiki/images/5/5e/Stamp222.png"]});
    }
    
    if(command === 'bless'){
        message.channel.send('!play https://www.youtube.com/watch?v=6_2IvSs35Lo');
        message.delete();
    }
    
    if (command === 'avatar') {
    let user = message.mentions.users.first() || message.author;        
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`${user.username}'s avatar`)
    .setImage(`${user.displayAvatarURL}`)
    message.channel.send({embed});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
