module.exports = {
    name: 'who',
    description: 'Who is this helpful bot?!',
    execute(message, args, bot) {
        message.channel.send(`Я ${bot.config.name} и я создан чтобы служить!`)
    },
}
