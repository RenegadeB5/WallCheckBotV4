const Discord = require('discord.js');
module.exports = {
	name: "chat",
	description: "allows you to communicate in mc chat",
	type: "event",
	on: {
		message: async function (message) {
			global.snipe = [message.author.tag, message.content];
		}
	}
};
