const Discord = require('discord.js');
module.exports = {
	name: "Leaderboard",
	description: "Where the leaderboard arrow functions will stay unless I find a better way.",
	type: "event",
	on: {
		messageReactionAdd: async function (reaction) {
			if (reaction.users.map(r => r.id).slice(-1)[0] === '373140966653034506') return;		
			if(reaction.emoji.name === '▶' && reaction.message.author.id === '373140966653034506') {
				if (((reaction.message.embeds[0].title).split(' ')[2]) === (reaction.message.embeds[0].title).split(' ')[4]) return;
				let lb = await global.client.datahandler.getLB(parseInt((reaction.message.embeds[0].title).split(' ')[2]) + 1);
				let embed = new Discord.RichEmbed()
				.setColor(0x00FFFF)
				.setTitle('Leaderboard: Page ' + (parseInt((reaction.message.embeds[0].title).split(' ')[2]) + 1) + ' of ' + lb[1])
				.addField('Member: Points', lb[0], true)
				.setFooter('\"Top checkers get paypal!\" - Jaimo')
				.setTimestamp()
				reaction.message.edit(embed);
			}
			if(reaction.emoji.name === '◀' && reaction.message.author.id === '373140966653034506') {
				if ((reaction.message.embeds[0].title).split(' ')[2] === '1') return;
				let lb = await global.client.datahandler.getLB(parseInt((reaction.message.embeds[0].title).split(' ')[2]) - 1);
				let embed = new Discord.RichEmbed()
				.setColor(0x00FFFF)
				.setTitle('Leaderboard: Page ' + (parseInt((reaction.message.embeds[0].title).split(' ')[2]) - 1) + ' of ' + lb[1])
				.addField('Member: Points', lb[0], true)
				.setFooter('\"Top checkers get paypal!\" - Jaimo')
				.setTimestamp()
				reaction.message.edit(embed);
			}
		}
	}
};
