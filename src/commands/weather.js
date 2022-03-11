const axios = require("axios");
const discord = require('discord.js');
module.exports = async (bot, message, args, argsF) => {
    message.delete();
    var {w} = '';
    await axios
    .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: `${args[0]}`,
            units: 'metric',
            lang: 'ru',
            APPID: 'a286accc70f5cfbd531ede4510f08fec'
        }
        })
    .then((res) => {
        w = res.data;
        const weather = new discord.MessageEmbed()
        .setTitle(`Погода в городе **${w.name}**`)
        .setColor(bot.config.defaultColors.success)
        .addFields(
            { name: 'Температура', value: '```css\n'+w.main.temp+'°```', inline: true},
            { name: 'Ощущается как', value: '```css\n'+w.main.feels_like+'°```', inline: true },
            { name: 'Скорость верта', value: '```css\n'+w.wind.speed+'м/с```', inline: true},
            { name: 'Влажность', value: '```css\n'+w.main.humidity+'%```', inline: true },
            { name: 'Облачность', value: '```css\n'+w.weather[0].description+'```', inline: true },
        )
        .setFooter({ text: '🆆🅾🅻🅵 🅲🅻🅰🅽 🅱🅾🆃' })
        .setThumbnail(`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`);
        message.channel.send({ embeds: [weather] });   
    })
    .catch ((err) => {
        bot.log(err)
    })
};

module.exports.names = ["weather", "погода"];