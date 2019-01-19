const fs = require("fs");
const regex = require("/app/links.json");
const diepregex = RegExp(regex.diep);
const Discord = require('discord.js');
module.exports = {
	name: "Link service.",
	description: "When a user reacts with \"🔗\", they will be sent the request link.",
	type: "event",
	on: {
		messageReactionAdd: async function (reaction) {
			let userid = reaction.users.map(r => r.id).slice(-1)[0];
			let username = reaction.users.map(r => r.username).slice(-1)[0] + '#' + reaction.users.map(r => r.discriminator).slice(-1)[0];
			if(reaction.emoji.name === '⚠' && reaction.message.channel.id === '498736242905710592') {
				if(reaction.message.reactions.find(reaction => reaction.emoji.name === '⚠').count >= 2) {
					global.client.users.get(userid).send('Staff have already been notifed of the troll and have aready begun, or will begin their investigation soon.');
				}
				else {
					global.client.users.get(userid).send('Staff have been notifed that the link reported has a troll present, and they will begin their investigation shortly. Thank you.');
					global.client.channels.get('498736242905710592').send('The link created by' + ' ' + username + ' ' + 'has been reported for having a troller present.');
				}
			}		
			if(reaction.emoji.name === '☠' && reaction.message.channel.id === '498736242905710592') {
				if(reaction.message.reactions.find(reaction => reaction.emoji.name === '☠').count >= 3) {
					reaction.message.delete();
				}
			}
			if(reaction.emoji.name === '🔗' && reaction.message.channel.id === '498736242905710592') {
				if (userid === '407593823921766410') return;
				let members = reaction.message.embeds.map(r => r.fields.map(r => r.value))[0].slice(-1)[0];
				let query = { name: username };
				async function sendLink() {
					let result = await global.client.datahandler.fetchLink(query);
					if (result[0] === undefined) {
						global.client.users.get(userid).send('Sorry, this invite link is no longer avalable.');
						reaction.message.delete();
					}
					else {
						global.client.users.get(userid).send(result[0].link + '\nNotes:' + ' ' + result[0].notes);               
						if (members.includes(username)) return;
						let embed = new Discord.RichEmbed()
						.setColor(0x0000FF)
						.setTitle(username)
						.addField('Party invite', result[0].notes)
						.addField('Members', members + '\n' + username)
						.setFooter('React with 🔗 to recieve the link, \nReact with ☠ if the link is invalid, \nAnd react with ⚠ if there is a troller present.');                
						reaction.message.edit({embed});  
					}
				}
				sendLink();
			}
		},
		message: async function (message) {
			let args = message.content.split(" ").slice(0);
			if (message.author.bot) return;
			function clearLink () {
					global.client.datahandler.remove1Link();
				}
			if (diepregex.test(args[0])) {
				let link = args[0];
				if (link.substr(0, 8) !== 'https://') {
					link = 'https://' + args[0];
				}
				let notes = args.slice(1).join(" ");
				if (notes.length < 1) {
					notes = 'No informtion provided.'
				}
				let insert = { name: message.member.user.tag, notes: notes, link: link };
 				let embed = new Discord.RichEmbed()
				.setColor(0x0000FF)
				.setTitle(message.member.user.tag)
				.addField('Party invite', notes)
				.addField('Members', message.member.user.tag)
				.setFooter('React with 🔗 to recieve the link,\nReact with ☠ if the link is invalid, \nAnd react with ⚠ if there is a troller present. \nBe aware that false alarms are punishable.');
				client.channels.get('498736242905710592').send({embed}).then(function (message) {message.react('🔗')});
				global.client.datahandler.insertLink(insert);
				message.delete(300);
				message.channel.send('Your link has successfully been posted.').then(message => {message.delete(5000)});
				setTimeout(clearLink, 3600000);
			}
		}
	}
};
