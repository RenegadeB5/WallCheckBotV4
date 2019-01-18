var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "points",
			description: "Gets a user's points.",
			group: "basics",
			memberName: "points"
		});
	}
	
	async run(msg) {
		if (msg.mentions.members.first) {
			msg.channel.send(global.client.datahandler.getPoints(msg.mentions.members.first.id));
		}
		else {
			msg.channel.send(global.client.datahandler.getPoints(msg.author.id));
		}	
	}
};
