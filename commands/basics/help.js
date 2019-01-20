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
		.setTitle('Message sniped!')
		.addField('.clear', 'Clears the walls. Usage: .clear', true)
		.addField('.give', 'Gives the mentioned player x ammount of points. Usage: .give <mention> <points>', true)
		.addField('.help', 'Displays all commands with their description and correct usage. Usage: .help', true)
		.addField('.info', 'Displays the bot\'s info. Usage: .info', true)
		.addField('.lb', 'Displays the points leaderboard. Usage: .lb', true)
		.addField('.points', 'Displays the user\'s points. Usage: .points', true)
		.addField('.snipe', 'Displays the most recently deleted message. Usage: .snipe', true)
		.addField('.start', 'Starts the wall service. Usage: .start', true)
		.addField('.stop', 'Stops the wall service. Usage: .stop', true)
		.addField('.weewoo', 'Alerts the faction that we are being raided. Usage: .weewoo', true)
		.setTimestamp()
		msg.channel.send(embed);
	}
};
