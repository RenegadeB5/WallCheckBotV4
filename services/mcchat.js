setTimeout(function () {
	if (process.env.mcchatOn === 'false') return;
	bot.chat(process.env.joincommand);
	bot.on("message", async function(message) {
		var msg = message.toString();
		if (msg.length <= 5 || msg.length >= 200 || msg.includes('@everyone') || msg.includes('@here') || msg.includes('<@')) return;                                 
		client.channels.get('543837977567166464').send(msg);
		if (msg.includes('➥ me)')) {
			console.log(msg);
			var username = msg.slice(9, msg.indexOf('➥ me)') - 1);
			var command = msg.slice(msg.indexOf('➥ me)') + 6, msg.length);
			var registered = await client.datahandler.isRegistered(username);
			if (registered === 'unregistered') return;
			if (command === 'clear') {
				if (global.paused === true) return;
				client.channels.get('528307983856173062').send('The walls have been cleared by ' + username + ' via ingame message!');
				client.timers.stop();
				setTimeout(function () {client.timers.start()}, 100);
				if (global.cooldown === false) {client.datahandler.mcaddPoint(username, 1);}
			}
		}	
	})
	setTimeout(function () {bot.setControlState('forward', true)}, 7000);
	setTimeout(function () {bot.setControlState('jump', true)}, 8000);
	setTimeout(function () {bot.clearControlStates()}, 15000);
}, 10000);
