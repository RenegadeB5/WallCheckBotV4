var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class TimeCommand extends Command {
	constructor(client) {
		super(client, {
			name: "time",
			description: "Shows how long it has been since the walls were last checked.",
			group: "basics",
			memberName: "time"
		});
	}
	
	async run(msg) {
		msg.channel.send('The walls haven\'t been checked in ' + global.minutes + ' minutes!');
	}
};
