var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class ClearCommand extends Command {
	constructor(client) {
		super(client, {
			name: "clear",
			description: "Clears the walls.",
			group: "basics",
			memberName: "clear"
		});
	}
	
	async run(msg) {
		if (msg.guild === null) return;
		if (msg.channel.id === '538282240363200512') return;
		if (global.paused === true) return;
		let tag = msg.author.tag;
		let insentive;
		if (global.cooldown === true) {
			insentive = 'The walls were cleared but ' + tag + ' hasn\'t gained a point!';
		}
		else {
			insentive = tag + ' now has ' + (await global.client.datahandler.getPoints(msg.author.id) + 1) + ' points!'
			setTimeout(function () {global.client.datahandler.addPoint(tag, msg.author.id, 1)}, 1000);
		}
		global.client.timers.stop();
		global.lastChecker = tag;
		setTimeout(function () {global.client.timers.start()}, 100);
		let embed = new Discord.RichEmbed()
		.setColor(0x00FF00)
		.setTitle('Walls Cleared!')
		.addField('Cleared by:', tag)
		.addField('Incentive:', insentive)
		.setFooter('\"Top checkers get paypal!\" - Jaimo')
		.setTimestamp()
		setTimeout(function () {msg.channel.send(embed)}, 100);
	}
};
