setTimeout(function () {
	if (process.env.mcchatOn === 'false') return;
	bot.chat(process.env.joincommand);
	bot.on("message", function(message) {
		var msg = message.toString();
		if (msg.length <= 5 || msg.length >= 200 || msg.includes('@everyone') || msg.includes('@here') || msg.includes('<@')) return;
		if (msg.includes('➥ me)')) {
			console.log(msg);
			var username = msg.slice(8, msg.indexOf('➥ me)') - 1);
			var command = msg.slice(msg.indexOf('➥ me)') + 6, msg.length);
			if (command === 'clear') {
				client.channels.get('528307983856173062').send('The walls have been cleared by ' + username + ' via ingame message!');
			}
		}	
		else {
			if
			client.channels.get('543650298410041344').send(msg);
		}
	})
}, 10000);
