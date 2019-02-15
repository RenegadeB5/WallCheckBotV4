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
		if (msg.guild === null) return;
		if (msg.channel.id === '538282240363200512' || '528288807385038859') return;
		let embed = new Discord.RichEmbed()
		.setColor(0xFF00FF)
		.setTitle('Walls Info!')
		.addField('The walls haven\'t been checked in:', global.minutes + ' minutes!')
		.addField('The walls were last checked by:', global.lastChecker)
		.setFooter('\"Top checkers get paypal!\" - Jaimo')
		.setTimestamp()
		msg.channel.send(embed);
	}
};
