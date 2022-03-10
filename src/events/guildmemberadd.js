module.exports = (bot, member) => {
    const discord = require('discord.js')
    const welcomeEmbed = new discord.MessageEmbed()
        .setColor(bot.config.defaultColors.success)
        .setTitle(`Новый член стаи!`)
        .setDescription(`<@${member.user.id}> добро пожаловать в нашу дружную семью!
        \n Будем признательны, если напишешь немного <#932234421866754098> и <#935205582279962684>
        \n Для добавления роли твоего клана введи команду **!clan** или **!клан** и через пробел название клана (WOLF, RFE, IZO или RUN).`)
        .setThumbnail(member.user.displayAvatarURL());
        bot.client.channels.cache.get(bot.chatID).send({ embeds: [welcomeEmbed] });
        bot.log(`---> ${member.user.username}`);

};

module.exports.names = "Memder Add";