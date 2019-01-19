var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "weewoo",
			description: "Alerts everyone of a possible raid attempt.",
			group: "basics",
			memberName: "weewoo"
		});
	}
	
	async run(msg) {
		global.client.timers.weewoo(msg.author.tag);
	}
};
