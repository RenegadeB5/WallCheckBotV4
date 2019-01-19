var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "info",
			description: "Displays information about the bot.",
			group: "basics",
			memberName: "info"
		});
	}
	
	async run(msg) {
		let embed = new Discord.RichEmbed()
		.setColor(0x0000FF)
		.setTitle('Info About This Bot')
		.addField('Developed by:', 'RenegadeBB#4311', true)
		.addField('Version:', '4', true)
		.addField('Prefix:', '.', true)
		.setTimestamp()
		msg.channel.send(embed);
	}
};
