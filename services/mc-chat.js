const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
	console.log('Usage : node echo.js <host> <port> [<name>] [<password>]')
	process.exit(1)
}

const bot = mineflayer.createBot({

	host: process.argv[2],
	port: parseInt(process.argv[3]),
	username: process.argv[4] ? process.argv[4] : 'echo',
	password: process.argv[5],
	verbose: true
});

bot.on('chat', (username, message) => {
	if (username === bot.username) return
	bot.chat(message)
});
