module.exports = (bot, member) => {
    const discord = require('discord.js')
    const welcomeEmbed = new discord.MessageEmbed()
        .setColor(bot.config.defaultColors.error)
        .setTitle(`Стая потеряла бойца...`)
        .setDescription(`<@${member.user.id}> уходит от нас долину мертвых :skull_crossbones:`);
        bot.client.channels.cache.get(bot.chatID).send({ embeds: [welcomeEmbed] });
        bot.log(`<--- ${member.user.username}`);
};

module.exports.names = "Memder Remove";