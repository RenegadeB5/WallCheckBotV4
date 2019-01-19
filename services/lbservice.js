const fs = require("fs");
const regex = require("/app/links.json");
const diepregex = RegExp(regex.diep);
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
				console.log(reaction.message.embeds.footer);
				let lb = await global.client.datahandler.getLB();
				let embed = new Discord.RichEmbed()
				.setColor(0x00FF00)
				.setTitle('Leaderboard')
				.addField('Top 10:', lb[0], true)
				.setFooter('Showing page 1 of ' + lb[1])
				.setTimestamp()
				reaction.message.edit(embed);
			}
		}
	}
};
