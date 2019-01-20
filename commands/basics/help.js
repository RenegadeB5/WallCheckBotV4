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
		.addField('.clear', 'Clears the walls.')
		.addField('.give <mention> <points>', 'Gives the mentioned user x points.')
		.addField('.help', 'Displays all commands with their description and correct usage.')
		.addField('.info', 'Displays the bot\'s info.')
		.addField('.lb', 'Displays the points leaderboard.')
		.addField('.points', 'Displays the user\'s points.')
		.addField('.snipe', 'Displays the most recently deleted message.')
		.addField('.start', 'Starts the wall service.')
		.addField('.stop', 'Stops the wall service.')
		.addField('.weewoo', 'Alerts the faction that we are being raided.')
		.addField('.time', 'Shows how long it has been since the walls were last checked.')
		.setTimestamp()
		msg.channel.send(embed);
	}
};
