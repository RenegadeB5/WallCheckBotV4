var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
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
		global.pasued = false;
		msg.channel.send('Wall service initialized!');
	}
};
