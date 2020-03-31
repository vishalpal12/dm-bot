const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);

const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix: config.prefix
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];

bot.on("ready", () => {
    clear();
});


bot.on("error", (error) => {
    bot.login(config.token);
});

bot.registry.registerGroup('dms', 'welp');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);


function clear() {
    console.clear();
    console.log(figlet.textSync("DM Essentials v1.5").green);
    console.log("MassDM bot for Discord, made by Dracula.");
    console.log(`Created by Triassic. Random send time set @ 0.01-${config.wait}s`);
    console.log(`Bot Prefix has been set to ${config.prefix}\n\n`);
    console.log(`Use at your own risk, developer has no responsibility about what you do.`);
}
