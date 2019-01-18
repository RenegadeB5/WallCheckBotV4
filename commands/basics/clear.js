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
		let tag = msg.author.tag;
		global.client.timers.stop();
		global.client.timers.start();
		global.client.datahandler.addPoint(tag, msg.author.id);
		let embed = new Discord.RichEmbed()
		.setColor(0x0000FF)
		.setTitle('Walls Cleared!')
		.addField('Cleared by:', tag, true)
		.addField('Insentive:', msg.author.id + ' now has ' + await global.client.datahandler.getPoints(msg.author.id) + ' points!', true)
		.setTimestamp()
		msg.channel.send(embed);
		
			
	}
};
