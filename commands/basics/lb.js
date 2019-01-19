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
		let embed = new Discord.RichEmbed()
		.setColor(0x00FF00)
		.setTitle('Leaderboard')
		.addField('Top 10:', (await global.client.datahandler.getLB())[0], true)
		.setFooter('Showing page ' (await global.client.datahandler.getLB())[2] 'of ' + (await global.client.datahandler.getLB())[1])
		.setTimestamp()
		msg.channel.send(embed).then(function (message) {message.react('◀'), setTimeout(function () {message.react('▶')}, 1000)});;
	}
};
