const Discord = require('discord.js');
class Timers {
	
	constructor() {
		this.checkwall = global.client.channels.get('533359760989487164');
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
		global.client.channels.get('536264092248178688').setName('✔️ Walls are clear!');
		global.cooldown = true;
		global.minutes = 0;
		global.counter = setInterval(global.client.timers.counter, 60000);
		global.notify = setInterval(global.client.timers.notify, 60000);
	}
	
	async stop() {
		clearInterval(global.counter);
		clearInterval(global.notify);
		clearInterval(global.raid);
	}
    
	async notify() {  
		if (global.minutes >= 2) {
			global.cooldown = false;
			if (global.minutes >= 10) {
				var tag = '@everyone'
			}
			else {
				var tag = '@here'
			}
			global.client.channels.get('536264092248178688').setName('⭐ Check walls! : ' + global.mintues + ' minutes!');
			global.client.channels.get('533359760989487164').send(tag);
			let embed = new Discord.RichEmbed()
			.setColor(0xFFFF00)
			.setTitle('Check Walls!')
			.addField('The walls haven\'t been checked in:', global.minutes + ' minutes!', true)
			.setTimestamp()
			global.client.channels.get('533359760989487164').send(embed);
		}  
	}
	
	async weewoo(user) {
		global.client.timers.stop;
		function weewooo() {
			global.client.channels.get('533359760989487164').send('@everyone');
			let embed = new Discord.RichEmbed()
			.setColor(0xFF0000)
			.setTitle('Wee Woo!')
			.addField('Triggered by:', user, true)
			.setTimestamp()
			global.client.channels.get('533359760989487164').send(embed);
		};
		weewooo();
		global.raid = setInterval(() => weewooo(), 6000);
		global.client.channels.get('536264092248178688').setName('🚨 WEE WOO');
	}
}

module.exports = Timers;
