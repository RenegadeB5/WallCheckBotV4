const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
	host: process.env.server,
	port: 25565,
	username: process.env.username,
	password: process.env.password,
	verbose: true
})

bot.on("message", function(msg) {
	if (msg.toString().includes('-> me')) {
		console.log(msg.toString());
		console.log(msg.toString()[1, msg.toString().indexOf('-> me') - 1]);
	}
	else {
		client.channels.get('543650298410041344').send('``' + msg.toString() + '``');
	}
});
