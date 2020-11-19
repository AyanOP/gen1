module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        message.channel.send('Type -gen for genrating and -stock for stock');
        
    }
}