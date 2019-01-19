var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "give",
			description: "Gives a user points.",
			group: "basics",
			memberName: "give",
			userPermissions: ['ADMINISTRATOR']
		});
	}
	
	async run(msg) {
		let args = msg.content.split(" ");
		global.client.datahandler.addPoint(msg.mentions.users.first().tag, msg.mentions.users.first().id, parseInt(args[2]));
		msg.channel.send('Successfully gave ' + msg.mentions.users.first().tag + ' ' + args[2] + ' point(s)!');
	}
};
