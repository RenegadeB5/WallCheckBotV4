class timers {
	
	constructor(client = global.client) {
		this.client = client;
       		this.initialized = false;
		this.checkwall = this.client.channels.find("name", "checkwall");
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
		console.log('started');
		global.minutes = 0;
		global.counter = setInterval(this.client.timers.counter(), 60000);
		global.notify = setInterval(this.client.timers.notify(), 60000);
	}
	
	async stop() {
		console.log('cleared');
		clearInterval(global.counter);
		clearInterval(global.notify);
		clearInterval(global.weewoo);
	}
    
	async notify() {  
		if (global.minutes >= 2) {
			if (global.minutes >= 10) {
			var tag = '@everyone'
			}
			else {
				var tag = '@here'
			}
			this.client.user.setStatus('idle');
			this.client.user.setPresence({ game: { name: 'Check walls.', type: 0 } });
			var message = tag + " " + 'The walls have not been checked in' + " " + global.minutes + " " + 'minutes.';
			this.checkwall.sendMessage(message);
		}  
	}
	
	async weewoo() {
		function weewooo() {
			for (var i = 0; i <= 5; i++) {
				this.checkwall.sendMessage('@everyone wee woo wee woo wee woo!', {tts: false});
			}
		};
		global.weewoo = setInterval(weewooo, 30000);
	}
}

module.exports = timers;
