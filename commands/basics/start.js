var { Command } = require("discord.js-commando");
module.exports = class StartCommand extends Command {
	constructor(client) {
		super(client, {
			name: "start",
			description: "Starts the wall service",
			group: "basics",
			memberName: "start",
			userPermissions: ['ADMINISTRATOR']
		});
	}
	
	async run(msg) {
		global.client.timers.stop();
		setTimeout(function () {global.client.timers.start()}, 1000);
		global.paused = false;
		msg.channel.send('with no comp');
		global.client.user.setStatus('online');
		global.client.user.setPresence({ game: { name: 'Wall service initialized!', type: 0 } });
	}
};
