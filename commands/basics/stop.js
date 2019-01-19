var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "points",
			description: "Gets a user's points.",
			group: "basics",
			memberName: "points",
			clientPermissions: ['ADMINISTRATOR']
		});
	}
	
	async run(msg) {
		global.client.timers.stop();
		msg.channel.send('Wall service stopped!');
	}
};
