module.exports = {
    name: 'ping',
    description: 'Ping! Pong?',
    execute(message) {
        const delay = Date.now() - message.createdAt
        message.reply(`**pong** *(задержка: ${delay}мс)*`)
        .then(msg => {
            setTimeout(() => msg.delete(), 5000)
            setTimeout(() => message.delete(), 2000)
          })
          .catch(console.error);
    },
}
