module.exports = (bot, message) => {

if(message.author.bot) return;
const {content} = message;
if (!content.startsWith(bot.pref)) return;
const
        messageArray = content.toLowerCase().split(' '), 
        command = messageArray[0].toLowerCase().slice(bot.pref.length),
        args = messageArray.slice(1),
        messageArrayFull = content.split(' '), 
        argsF = messageArrayFull.slice(1),
        commandRun = bot.commands.get(command);

if(commandRun) commandRun(bot, message, args, argsF);

};


module.exports.names = "Message Create";