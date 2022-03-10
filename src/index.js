require('dotenv').config();
const discord = require('discord.js');
const fsys = require('fs');
const path = require('path');
const config = require('../config.json');
const { TOKEN } = process.env;
const { prefix, name, chat } = config;

// Config
const configSchema = {
    defaultColors: {
        success: '#41b95f',
        neutral: '#287db4',
        warning: '#ff7100',
        error: '#c63737',
    },
}

// Define the bot
const bot = {
    client: new discord.Client({intents: config.cfg.intents}),
    log: console.log, // eslint-disable-line no-console
    commands: new discord.Collection(),
    listeners: new discord.Collection(),
    config: configSchema,
    pref: prefix,
    chatID: chat
}


/*
 * Register event listeners
 */
require('./listeners')(bot);
bot.client.login(TOKEN);

const commandFiles = fsys.readdirSync(path.resolve(__dirname, 'commands'));
for (const file of commandFiles) {
    const com = require(`./commands/${file}`);
    bot.log("Command add -> "+com.names)
    com.names.forEach(el => {
        bot.commands.set(el, com);
    });
}
const eventFiles = fsys.readdirSync(path.resolve(__dirname, 'events'));
for (const efile of eventFiles) {
    const list = require(`./events/${efile}`);
    bot.log("Event add -> "+list.names);
}
