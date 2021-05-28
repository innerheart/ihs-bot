const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const activities_list = ['Hello',];

client.on('ready', () => {
    console.log("I am ready!");
    
});
client.on('message', message => {
    let prefix = '!';
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    //if (message.author.bot || !msg.startsWith(prefix)) return; //undefined;
    
    if(message === 'tf'){
        message.channel.send({files:["https://cdn.discordapp.com/attachments/576370983045431309/744181382171066458/image0-16.jpg"]});
    }
    
    if(command === 'test'){
        message.channel.send('hello test');
    }
    
    if(command === 'ping'){
        message.channel.send('Pong! ' + `${Date.now() - message.createdTimestamp}` + ' ms');
    }
    
    if(command === 'gbfs'){
        message.channel.send({files:["https://i.imgur.com/6tLrau1.png"]});
    }

    if(command === 'scary'){
        message.channel.send({files:["https://i.imgur.com/CQPF2tc.gif"]});
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
       
    if(command === 'nacl'){
        message.channel.send({files:["https://cdn.discordapp.com/attachments/168754193417502722/513148036541710337/Capture.PNG"]});
    }
    
    if(command === 'fuk'){
        message.channel.send({files:["https://pbs.twimg.com/media/DaC-iHXU0AA-gZF.jpg"]});
    }
    
    if(command === 'lyria'){
        message.delete();
        message.channel.send({files:["https://pbs.twimg.com/media/DaBD457UwAA9w4T.jpg"]});
    }
    
    if(command === 'money'){
        //message.delete();
        message.channel.send({files:["https://i.imgur.com/De3IcqZ.gif"]});
    } 
    
    if(command === '?'){
        message.channel.send({files:["https://gbf.wiki/images/5/5e/Stamp222.png"]});
    }
    
    if(command === 'skip'){
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
    
    if(command === 'choose'){
    let pick = message.content.slice(prefix.length + 5).trim().split(',');
    message.channel.send( `${pick[Math.floor(Math.random()* pick.length)] } `);
         
    }
    
    if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
