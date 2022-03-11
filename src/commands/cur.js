const axios = require("axios");
const discord = require('discord.js');
module.exports = async (bot, message, args, argsF) => {
    message.delete();
    var {cur, USD, EUR, pUSD, pEUR, diffUSD, diffEUR, VAL, pVAL, diffVAL} = '';
    var {arrowEUR, arrowUSD, arrowVAL} = '▼'
    await axios
    .get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => {
        cur = res.data.Valute;
        if (args.length < 1) {
            USD = cur['USD'].Value;
            EUR = cur['EUR'].Value;
            pUSD = cur['USD'].Previous;
            pEUR = cur['EUR'].Previous;
            diffUSD = pUSD-USD;
            if (diffUSD < 0) {arrowUSD = '▲'};
            diffEUR = pEUR-EUR;
            if (diffEUR < 0) {arrowEUR = '▲'};
            const curmsg = new discord.MessageEmbed()
            .setColor(bot.config.defaultColors.success)
            .setDescription(`:flag_us: **${USD}** ${arrowUSD}\n:flag_eu: **${EUR}** ${arrowEUR}`);
            message.channel.send({ embeds: [curmsg] })
        } else {
            let ar = args[0].toUpperCase();
            VAL = cur[ar].Value;
            pVAL = cur[ar].Previous;
            diffVAL = pVAL-VAL;
            if (diffVAL < 0) {arrowVAL = '▲'};
            const valmsg = new discord.MessageEmbed()
            .setColor(bot.config.defaultColors.success)
            .setDescription(`${ar} **${VAL}** ${arrowVAL}`);
            message.channel.send({ embeds: [valmsg] })
        }
    })
    .catch ((err) => {
        bot.log(err)
    })
};

module.exports.names = ["cur", "курс"];