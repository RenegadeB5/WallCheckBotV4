var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "lb",
			description: "Gets the current leaderboard.",
			group: "basics",
			memberName: "lb"
		});
	}
	
	async run(msg) {
		let tag = msg.author.tag;
		console.log(global.client.datahandler.getLB()[0].lb);
		msg.channel.send(global.client.datahandler.getLB()[0].lb);
	}
};
