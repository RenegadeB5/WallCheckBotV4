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
		console.log(global.client.datahandler.getLB());
		msg.channel.send(await global.client.datahandler.getLB()[0]);
	}
};
