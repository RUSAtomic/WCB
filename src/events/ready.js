module.exports = (bot) => {
    bot.log(`Logged in as: ${bot.client.user.tag} (id: ${bot.client.user.id})`);
    bot.client.user.setPresence({ activities: [{ name: "на нас свысока :)", type: "WATCHING"}], status: 'online' });
};

module.exports.names = "Bot Ready";