var { Command } = require("discord.js-commando");
module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: "stop",
			description: "Stops the wall service",
			group: "basics",
			memberName: "stop",
			userPermissions: ['ADMINISTRATOR']
		});
	}
	
	async run(msg) {
		if (msg.member.roles.has(msg.guild.roles.get('536225066535616513').id)) {
			global.client.user.setStatus('online');
			global.client.user.setPresence({ game: { name: 'Wall service paused!', type: 0 } });
			global.client.timers.stop();
			msg.channel.send('Wall service stopped!');
		}
	}
};
