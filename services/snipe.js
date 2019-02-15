const Discord = require('discord.js');
module.exports = {
	name: "snipe",
	description: "snipes a deleted message!",
	type: "event",
	on: {
		messageDelete: async function (message) {
			global.snipe = [message.author.tag, message.content];
		}
	}
};
