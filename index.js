const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)

});


bot.login(token);
