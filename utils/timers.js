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
		global.cooldown = true;
		global.minutes = 0;
		global.counter = setInterval(global.client.timers.counter, 60000);
		global.notify = setInterval(global.client.timers.notify, 60000);
	}
	
	async stop() {
		console.log('cleared');
		clearInterval(global.counter);
		clearInterval(global.notify);
		clearInterval(global.weewoo);
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
			global.client.user.setStatus('idle');
			global.client.user.setPresence({ game: { name: 'Check walls!', type: 0 } });
			global.client.channels.get('533359760989487164').send(tag);
			let embed = new Discord.RichEmbed()
			.setColor(0xFFFF00)
			.setTitle('Check Walls!')
			.addField('The walls haven\'t been checked in:', global.minutes + ' minutes!', true)
			.setTimestamp()
			global.client.channels.get('533359760989487164').send(embed);
		}  
	}
	
	async weewoo() {
		function weewooo() {
			for (var i = 0; i <= 5; i++) {
				this.checkwall.send('@everyone wee woo wee woo wee woo!', {tts: false});
			}
		};
		global.weewoo = setInterval(weewooo, 30000);
	}
}

module.exports = Timers;
