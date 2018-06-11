const Discord = require('discord.js');
const client = new Discord.Client();
import java.util.Random;

Random rand = new Random();
int  n = rand.nextInt(100) + 1;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
client.on('message', message => {
    if (message.content === '!random') {
    	message.reply(n);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
