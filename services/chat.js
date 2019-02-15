const Discord = require('discord.js');
module.exports = {
	name: "chat",
	description: "allows you to communicate in mc chat",
	type: "event",
	on: {
		message: async function (message) {
			if (message.author.id === '373140966653034506') return;
			if (message.channel.id !== '543650298410041344') return;
			if (message.content.length >= 80) return;
			if (message.content.includes('stamp')) {
				bot.chat(message.author.id + ': ' + message.content);
			}
			else {
				bot.chat(message.content);
			}
		}
	}
};
