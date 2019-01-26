var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class WeewooCommand extends Command {
	constructor(client) {
		super(client, {
			name: "weewoo",
			description: "Alerts everyone of a possible raid attempt.",
			group: "basics",
			memberName: "weewoo"
		});
	}
	
	async run(msg) {
		if (global.paused === true) return;
		global.client.timers.stop();
		global.client.timers.weewoo(msg.author.tag);
	}
};
