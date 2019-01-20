var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: "snipe",
			description: "Snipes the most recently deleted message.",
			group: "basics",
			memberName: "snipe"
		});
	}
	
	async run(msg) {
		let snipe = global.snipe;
		if (snipe === undefined) return;
		let embed = new Discord.RichEmbed()
		.setColor(0x0000FF)
		.setTitle('Message sniped!')
		.addField(snipe[0] + ':', snipe[1], true)
		.setTimestamp()
		msg.channel.send(embed);
	}
};
