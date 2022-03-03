module.exports = (bot, member) => {
    const discord = require('discord.js')
    const embed = new discord.RichEmbed()
        .setColor("#ff8822")
        .setDescription(`Привет ${member.user.tag}, добро пожаловать в нашу дружную семью! Будем признательны, если напишешь немного <#932234421866754098> и <#935205582279962684> Для добавления роли твоего клана введи сообщение начиная с **!** и название клана заглавными буквами (WOLF, RFE, IZO или RUN).`)
        .setThumbnail(member.user.avatarURL())
        member.guild.channels.cache.get("932180632459702345").send({ embeds: [welcomembed] });
        message.channel.send({embed})

};

module.exports.names = "Memder Add";
