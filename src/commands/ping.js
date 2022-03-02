module.exports = {
    name: 'ping',
    description: 'Ping! Pong?',
    execute(message) {
        const delay = Date.now() - message.createdAt
        message.reply(`**pong** *(задержка: ${delay}мс)*`)
    },
}
