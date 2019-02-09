const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
	host: process.env.server,
	port: 25565,
	username: process.env.username,
	password: process.env.password,
	verbose: true
})

bot.on("message", function(msg) {
	const str = msg.toString();
	const [completeMsg, username, message] = str.match(/(.*) » (.*)/) || [str];
	if (username && message) bot.emit("chat", username, message);
	console.log(username + ' : ' + message);
});

bot.on('chat', (username, message) => {
	if (username === bot.username) return;
	bot.chat(message);
});
