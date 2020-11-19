const { privateDecrypt } = require('crypto');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'g-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandfiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(` you typing ${prefix}help`, {type: 'WATCHING'}) // PLAYING, WATCHING, LISTENING, STREAMING 
})



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message,args);
        message.channel.send('Type -gen for genrating and -stock for stock');
    }else if(command === 'stock'){
        message.channel.send('stock is Hulu Crunchyroll Uplay  Minecraft Nitro codes(unchecked) Netflix(Uncheked) kaspresy  Nord Ipvanish Xbox uncehcked codes Amazon prime  random steam keys  Random discord game Proxies  Disney Origin Spotify Steam')
        client.commands.get('stock').execute(message,args);
     }else if(command === 'gen'){
         message.channel.send('Type the accounts u want to genrate infront of - command like this -hulu')
     }
     if(command === 'hulu'){
        privateMessage(client,'gen hulu','gmand3373:wma55jum')
    }
    
});

client.login('Nzc3NzMxMTMzMzc4Nzg5NDA3.X7Hsjw.Hl80liDVaYxS_GC7iu8MXVQ-V84');