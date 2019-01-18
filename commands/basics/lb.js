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
		let embed = new Discord.RichEmbed()
		global.client.datahandler.getLB();
		.setColor(0x00FF00)
		.setTitle('Walls Cleared!')
		.addField('Cleared by:', tag, true)
		.addField('Insentive:', tag + ' now has ' + (await global.client.datahandler.getPoints(msg.author.id) + 1) + ' points!', true)
		.setTimestamp()	
	}
};
