const Discord = require('discord.js');
module.exports = {
	name: "Leaderboard",
	description: "Where the leaderboard arrow functions will stay unless I find a better way.",
	type: "event",
	on: {
		messageReactionAdd: async function (reaction) {
			if (reaction.users.map(r => r.id).slice(-1)[0] === '407593823921766410') return;		
			if(reaction.emoji.name === '▶' && reaction.message.author.id === '407593823921766410') {
				if (((reaction.message.embeds[0].title).split(' ')[2]) === (reaction.message.embeds[0].title).split(' ')[4]) return;
				console.log(parseInt((reaction.message.embeds[0].title).split(' ')[2]) + 1);
				let lb = await global.client.datahandler.getLB((reaction.message.embeds[0].title).split(' ')[2] + 1);
				let embed = new Discord.RichEmbed()
				.setColor(0x00FF00)
				.setTitle('Leaderboard: Page ' + ((reaction.message.embeds[0].title).split(' ')[2]) + 1 + ' of ' + lb[1])
				.addField('Top 10:', lb[0], true)
				.setFooter('Insentive text goes here.')
				.setTimestamp()
				reaction.message.edit(embed);
			}
			if(reaction.emoji.name === '◀' && reaction.message.author.id === '407593823921766410') {
				if ((reaction.message.embeds[0].title).split(' ')[2] === (reaction.message.embeds[0].title).split(' ')[4]) return;
			}
		}
	}
};
