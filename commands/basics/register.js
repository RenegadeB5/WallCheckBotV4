var { Command } = require("discord.js-commando");
const Discord = require('discord.js');
module.exports = class RegisterCommand extends Command {
	constructor(client) {
		super(client, {
			name: "register",
			description: "Adds a user's ign to the database",
			group: "basics",
			memberName: "register"
		});
	}
	
	async run(msg) {
		let args = msg.content.split(" ");
		if (!args[1]) return;
		let registered = await client.datahandler.isRegistered(msg.author.id);
		if (registered === 'registered') {
			msg.channel.send('You are already registered!');
		}
		else {
			client.datahandler.register(msg.author.tag, msg.user.id, args[1]);
			msg.channel.send('You have successfully been registered!');
		}
	}
};
