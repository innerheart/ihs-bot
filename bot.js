const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
//const activities_list = ["Hello",];

client.on('ready', () => {
   // client.user.setActivity('with your feeling', { type: 'PLAYING'});
    /*
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]);
    }, 10000);
    */
});
client.on('message', message => {
    let prefix = '!';
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
    
    //let msg = message.content.toLowerCase();
    //if (message.author.bot || !msg.startsWith(prefix)) return; //undefined;
    
    if(command === 'test'){
        message.channel.send('hello test');
    }
    
    if(command === 'ping'){
        message.channel.send('Pong! ' + `${Date.now() - message.createdTimestamp}` + ' ms');
    }

    if(command === 'scary'){
        message.channel.send({files:["https://i.imgur.com/CQPF2tc.gif"]});
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
    
    
    if (command === 'avatar') {
    let user = message.mentions.users.first() || message.author;        
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`${user.username}'s avatar`)
    .setImage(`${user.displayAvatarURL}`)
    message.channel.send({embed});
    }
    
    if(command === 'choose'){
    let pick = message.content.slice(prefix.length + 7).trim().split(',');
    let ans = pick[Math.floor(Math.random()* pick.length)]
    message.channel.send(ans);
    }
    
    /*
    if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
    }*/
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
