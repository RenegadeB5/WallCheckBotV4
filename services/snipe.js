const Discord = require('discord.js');
module.exports = {
	name: "Leaderboard",
	description: "Where the leaderboard arrow functions will stay unless I find a better way.",
	type: "event",
	on: {
		messageDelete: async function (message) {
			global.snipe = [message.author.tag, message.content];
		}
	}
};
