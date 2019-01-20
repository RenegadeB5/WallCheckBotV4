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
		.addField('\n.clear', 'Clears the walls.', true)
		.addField('\n.give <mention> <points>', 'Gives the mentioned user x points.', true)
		.addField('\n.help', 'Displays all commands with their description and correct usage.', true)
		.addField('\n.info', 'Displays the bot\'s info.', true)
		.addField('\n.lb', 'Displays the points leaderboard.', true)
		.addField('\n.points', 'Displays the user\'s points.', true)
		.addField('\n.snipe', 'Displays the most recently deleted message.', true)
		.addField('\n.start', 'Starts the wall service.', true)
		.addField('\n.stop', 'Stops the wall service.', true)
		.addField('\n.weewoo', 'Alerts the faction that we are being raided.', true)
		.addField('\n.time', 'Shows how long it has been since the walls were last checked.', true)
		.setTimestamp()
		msg.channel.send(embed);
	}
};
