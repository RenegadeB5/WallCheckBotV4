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
		console.log(msg.mentions.members.first());
		console.log(msg.mentions.members.first().id);
		msg.channel.send(global.client.datahandler.getPoints(msg.mentions.members.first().id));
	}
};
