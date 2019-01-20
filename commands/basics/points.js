var { Command } = require("discord.js-commando");
module.exports = class PointsCommand extends Command {
	constructor(client) {
		super(client, {
			name: "points",
			description: "Retrieves the user's points.",
			group: "basics",
			memberName: "points"
		});
	}
	
	async run(msg) {
		msg.channel.send('You have ' + await global.client.datahandler.getPoints(msg.author.id) + ' points!');
	}
};
