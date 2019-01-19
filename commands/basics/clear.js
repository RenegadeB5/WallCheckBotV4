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
		let insentive;
		if (global.cooldown === true) {
			insentive = 'The walls were cleared but ' + tag + ' hasn\'t gained a point!';
		}
		else {
			insentive = tag + ' now has ' + (await global.client.datahandler.getPoints(msg.author.id)) + ' points!'
			global.client.datahandler.addPoint(tag, msg.author.id);
		}
		global.client.timers.stop();
		global.client.timers.start();
		let embed = new Discord.RichEmbed()
		.setColor(0x00FF00)
		.setTitle('Walls Cleared!')
		.addField('Cleared by:', tag, true)
		.addField('Insentive:', insentive, true)
		.setTimestamp()
		msg.channel.send(embed);
		global.client.user.setStatus('online');
		global.client.user.setPresence({ game: { name: 'The walls are safe.', type: 0 } });	
	}
};
