export default function hello(message) {
    message.channel.send("Hello <@" + message.author.id + ">!");
}