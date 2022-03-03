module.exports = (bot) => {

bot.client
.on('ready', () => require('../events/ready')(bot))
.on('error', err => {bot.log(`Client error: ${err.message}`)})
.on('reconnecting', (client) => {bot.log('Reconnecting...')})
.on('disconnect', evt => {bot.log(`Disconnected: ${evt.reason} (${evt.code})`)})
.on('messageCreate', (message) => require('../events/messagecreate')(bot, message))
.on('messageCreate', (message) => require('../events/listener300')(bot, message))
.on('guildMemberAdd', () => require('../events/guildmemberadd')(bot, member))

}