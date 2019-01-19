var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "stop",
			description: "Stops the wall service",
			group: "basics",
			memberName: "stop",
			clientPermissions: ['ADMINISTRATOR']
		});
	}
	
	async run(msg) {
		global.client.user.setStatus('online');
		global.client.user.setPresence({ game: { name: 'Wall service paused!', type: 0 } });
		global.client.timers.stop();
		msg.channel.send('Wall service stopped!');
	}
};
