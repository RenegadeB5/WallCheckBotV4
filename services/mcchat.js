const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
	host: process.env.server,
	port: 25565,
	username: process.env.username,
	password: process.env.password,
	verbose: true
});

setTimeout(function () {bot.chat('/queue mars')}, 3000);

bot.on("message", function(message) {
	var msg = message.toString();
	if (msg.includes('-> me')) {
		console.log(msg);
		var username = msg.slice(1, msg.indexOf('-> me') - 1);
		if (msg.includes('clear')) {
			client.channels.get('528307983856173062').send('The walls have been cleared by ' + username + ' via ingame message!');
		};
	}
	else {
		client.channels.get('543650298410041344').send('``' + msg + '``');
	};
});
global.bot = bot;
