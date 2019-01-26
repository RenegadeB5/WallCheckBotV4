const Discord = require('discord.js');
class Timers {
	
	constructor() {
		this.checkwall = global.client.channels.get('528307983856173062');
       		this.initialized = false;
	}
	
	async initialize() {
		this.initialized = true;
	}

	get isInitialized() {
		return this.initialized;
	}

	async counter() {
		global.minutes += 1
	}
	
	async start() {
		global.minutes = 0;
		global.client.channels.get('528307983856173062').setName('wall-check:✔️Clear✔️');
		global.cooldown = true;
		global.counter = setInterval(global.client.timers.counter, 60000);
		global.notify = setInterval(global.client.timers.notify, 60000);
	}
	
	async stop() {
		clearInterval(global.counter);
		clearInterval(global.notify);
		clearInterval(global.raid);
	}
    
	async notify() {  
		if (global.minutes >= 5) {
			global.cooldown = false;
			if (global.minutes >= 10) {
				var tag = '@everyone'
			}
			else {
				var tag = '@here'
			}
			global.client.channels.get('528307983856173062').setName('wall-check:❗Check❗');
			global.client.channels.get('528307983856173062').send(tag);
			let embed = new Discord.RichEmbed()
			.setColor(0xFFFF00)
			.setTitle('Check Walls!')
			.addField('The walls haven\'t been checked in:', global.minutes + ' minutes!')
			.setTimestamp()
			global.client.channels.get('528307983856173062').send(embed);
		}  
	}
	
	async weewoo(user) {
		global.client.channels.get('528307983856173062').send('@everyone');
		let embed = new Discord.RichEmbed()
		.setColor(0xFF0000)
		.setTitle('Wee Woo!')
		.addField('Triggered by:', user)
		.setTimestamp()
		let alert = embed;
		function weewooo() {
			global.client.channels.get('528307983856173062').send(alert);
		};
		weewooo();
		global.raid = setInterval(() => weewooo(), 6000);
		global.client.channels.get('528307983856173062').setName('wall-check:🚨WEEWOO🚨');
	}
}

module.exports = Timers;
