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
		if (msg.guild === null) return;
		if (msg.channel.id === '538282240363200512' || msg.channel.id === '528288807385038859') return;
		let args = msg.content.split(" ");
		if (!args[1]) return;
		let registered = await client.datahandler.isRegistered(args[1]);
		if (registered === 'registered') {
			msg.channel.send('You are already registered!');
		}
		else {
			await client.datahandler.register(msg.author.tag, msg.author.id, args[1]);
			msg.channel.send('You have successfully been registered!');
		}
	}
};
