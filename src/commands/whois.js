module.exports = {
    name: 'whois',
    description: 'Get information on a certain user.',
    execute(message) {
        if (message.mentions.users.size) {
            const taggedUser = message.mentions.users.first()
            message.delete();
            message.channel.send(
                `Информация о пользователе: ${
                    taggedUser.username
                } (аккаунт создан: ${taggedUser.createdAt.toUTCString()})`,
            )
        } else {
            // default to sender if no user is mentioned
            const { author } = message
            message.reply(
                `Коротко о себе: ${
                    author.username
                } (аккаунт создан: ${author.createdAt.toUTCString()})`,
            )
            .then(msg => {
                setTimeout(() => msg.delete(), 5000)
                setTimeout(() => message.delete(), 2000)
              });
        }
    },
}
