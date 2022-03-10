module.exports = async (bot, message, args, argsF) => {
    const delay = Date.now() - message.createdAt
    message.reply(`**pong** *(задержка: ${delay}мс)*`)
    .then(msg => {
        setTimeout(() => msg.delete(), 5000)
        setTimeout(() => message.delete(), 2000)
        })
    .catch(console.error);
};

module.exports.names = ["ping", "пинг"];