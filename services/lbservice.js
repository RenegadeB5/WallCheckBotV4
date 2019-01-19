const Discord = require('discord.js');
module.exports = {
	name: "Leaderboard",
	description: "Where the leaderboard arrow functions will stay unless I find a better way.",
	type: "event",
	on: {
		messageReactionAdd: async function (reaction) {
			if (reaction.users.map(r => r.id).slice(-1)[0] === '407593823921766410') return;		
			if(reaction.emoji.name === '▶' && reaction.message.author.id === '407593823921766410') {
				
			}
			if(reaction.emoji.name === '◀' && reaction.message.author.id === '407593823921766410') {
				console.log((reaction.message.embeds[0].title)[18]);
				console.log((reaction.message.embeds[0].title)[24]);
				
			}
		}
	}
};
