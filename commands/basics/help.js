var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: "help",
			description: "Displays all commands.",
			group: "basics",
			memberName: "help"
		});
	}
	
	async run(msg) {
		let embed = new Discord.RichEmbed()
		.setColor(0xBF00FF)
		.setTitle('List of commands:')
		.addField('.clear', 'Clears the walls.', true)
		.addField('.give <mention> <points>', 'Gives the mentioned user x points.', true)
		.addField('.help', 'Displays all commands with their description and correct usage.', true)
		.addField('.info', 'Displays the bot\'s info.', true)
		.addField('.lb', 'Displays the points leaderboard.', true)
		.addField('.points', 'Displays the user\'s points.', true)
		.addField('.snipe', 'Displays the most recently deleted message.', true)
		.addField('.start', 'Starts the wall service.', true)
		.addField('.stop', 'Stops the wall service.', true)
		.addField('.weewoo', 'Alerts the faction that we are being raided.', true)
		.addField('.time', 'Shows how long it has been since the walls were last checked.', true)
		.setTimestamp()
		msg.channel.send(embed);
	}
};
