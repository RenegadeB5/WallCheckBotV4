var { Command } = require("discord.js-commando");
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
		global.client.timers.stop();
		global.client.timers.start();
		console.log(msg.author.tag + '#' + msg.author.discriminator);
		msg.channel.send('The walls have been cleared by ' + msg.author);
			
	}
};
