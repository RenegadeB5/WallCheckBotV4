var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "addpoint",
			description: "Gives a user points.",
			group: "basics",
			memberName: "addpoint"
		});
	}
	
	async run(msg) {
		global.client.datahandler.addPoint(msg.mentions.users.first().tag, msg.mentions.users.first().id);
	}
};
