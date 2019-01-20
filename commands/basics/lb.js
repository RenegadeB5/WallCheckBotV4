var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class LBCommand extends Command {
	constructor(client) {
		super(client, {
			name: "lb",
			description: "Gets the current leaderboard.",
			group: "basics",
			memberName: "lb"
		});
	}
	
	async run(msg) {
		let lb = await global.client.datahandler.getLB(1);
		let embed = new Discord.RichEmbed()
		.setColor(0x00FFFF)
		.setTitle('Leaderboard: Page 1 of ' + lb[1])
		.addField('Member: Points', lb[0], true)
		.setFooter('\"Top checkers get paypal!\" - Jaimo')
		.setTimestamp()
		msg.channel.send(embed).then(function (message) {message.react('◀'), setTimeout(function () {message.react('▶')}, 1000)});
	}
};
