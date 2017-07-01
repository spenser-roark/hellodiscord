import Discord from 'discord.js';
import config from './config';
import commands from './commands';
import { hello } from './Actions';
const DiscordClient = new Discord.Client();

DiscordClient.login(config.token.helloBotToken);

DiscordClient.on("ready", () => {
    console.log("Hello bot ready to work!");
});

DiscordClient.on("message", (message) => {
    if(commands[message.content]) {
        commands[message.content](message);
    }
});

DiscordClient.on('disconnected', function () {
    console.log('Done!');
    process.exit(1);
});