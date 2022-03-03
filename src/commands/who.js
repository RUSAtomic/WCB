module.exports = async (bot, message, args, argsF) => {
        message.channel.send(`Я ${bot.config.name} и я создан чтобы служить!`);
        message.delete();
};

module.exports.names = ["who", "кто"];
