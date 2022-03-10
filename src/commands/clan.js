module.exports = async (bot, message, args, argsF) => {
    const discord = require('discord.js')
    const myStr = ["WOLF", "RFE", "RUN", "IZO Триумф"];
    message.delete();
    var role = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(args));
    if (role != undefined) {
        var rMember =  message.guild.members.cache.get(message.author.id);
        var rRoles = rMember.roles;
        var inrole = rRoles.cache.some(role => role.name.toLowerCase() == args);
        if (!inrole) {
            rRoles.cache.forEach(drole => {
                if (myStr.some(v => drole.name.toLowerCase().includes(v.toLowerCase()))) {
                    rRoles.remove(drole);
                };
            });
            rMember.roles.add(role)
            .then(bot.log(`Succesfuly added role to member ${message.author.tag}`))
            .catch(bot.error);
            const Clan = new discord.MessageEmbed()
            .setColor(bot.config.defaultColors.success)
            .setDescription(`Изменение клана участника **${message.member.displayName}**:
            \n Добавлен в клан **${role.name}**
            `);
            message.channel.send({ embeds: [Clan] })
            .then(msg => {
                setTimeout(() => msg.delete(), 5000)
            });
        } else {
            const InClan = new discord.MessageEmbed()
            .setColor(bot.config.defaultColors.warning)
            .setDescription(`Вы уже в клане **${role.name}**`);
            message.channel.send({ embeds: [InClan] })
            .then(msg => {
                setTimeout(() => msg.delete(), 5000)
            });
        }
    } else {
            const NoClan = new discord.MessageEmbed()
            .setColor(bot.config.defaultColors.error)
            .setDescription(`Клана **${argsF}** не существует`);
            message.channel.send({ embeds: [NoClan] })
            .then(msg => {
                setTimeout(() => msg.delete(), 5000)
            });
        }
    }

module.exports.names = ["clan", "клан"];