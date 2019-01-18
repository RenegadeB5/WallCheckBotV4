var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "clear",
			description: "Clears the walls.",
			group: "basics",
			memberName: "clear"
		});
	}
	
	async run(msg) {
		global.client.timers.stop();
		global.client.timers.start();
		global.client.datahandler.addPoint(msg.author.tag, msg.author.id);
		let embed = new Discord.RichEmbed()
		.setColor(0x0000FF)
		.setTitle('Walls Cleared!')
		.setField('The walls have been cleared by ' + msg.author.tag + '!', msg.auhtor.tag + ' now has ' + await global.client.datahandler.getPoints(msg.author.id) + '!')
		.setTimestamp()
		msg.channel.send(embed);
		
			
	}
};
