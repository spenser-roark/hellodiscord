import config from '../config';

// Should we pass message along? Is it better to just return stuff?
export default function Help(message) {
    message.channel.send("Hey there <@" + message.author.id +"> Here are a list of the amazing commands you can use:\n");
    message.channel.send(Object.keys(config.commands).map((command) => {
        return command + ": " + config.commands[command];
    }));
}