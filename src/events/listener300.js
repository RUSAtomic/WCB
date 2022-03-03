module.exports = (bot, message) => {
    if(message.author.bot) return;
    const {content} = message;
    if (content.startsWith(bot.pref)) return;
    const myStr = ["300", "299+1", "200+100", "тристо" ,"триста"];
      if (myStr.some(v => content.toLowerCase().includes(v))) {
        message.channel.send("Кто там что про тракториста? :rofl:");
      }
};

module.exports.names = "300";