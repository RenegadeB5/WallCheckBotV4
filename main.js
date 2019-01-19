const path = require("path");
const config = require("./localdata/config.json");
const commando = require("discord.js-commando");
const { initializeServices, services } = require("./services");
const log = require("fancy-log");
var utils = require("./utils");

var client = new commando.Client({
	owner: config.owners,
	commandEditableDuration: 0,
	nonCommandEditable: false,
	unknownCommandResponse: false,
	commandPrefix: "."
});

client.on("ready", async () => {
	log(`Logged in as ${client.user.tag} (${client.user.id})`);
	client.user.setActivity("with sapphires!");
	// Initialize datahandler
	client.datahandler = new utils.datahandler();
	await client.datahandler.initialize();
	client.timers = new utils.timers();
	await client.timers.initialize();
	log("Datahandler initialized.");
	log('Timers Initialized');
	// Initialize services
	await initializeServices(client);
	log("Services initialized.");
	// Attach to global object
	global.services = services;
	global.utils = utils;
	log("Global variables partly initialized.");
	// Register commands, groups and types
	client.registry.registerDefaultTypes();
	log("Default types initialized.");
	client.registry.registerDefaultGroups();
	log("Default groups initialized.");
	client.registry.registerGroups([
		["basics", "Basic factions commands."],
	]);
	log("Command groups initialized.");
	client.registry.registerCommandsIn(path.join(__dirname, "commands"));
	log("Commands initialized.");
	client.user.setStatus('online');
	client.user.setPresence({ game: { name: 'Wall service initialized!', type: 0 } });
	client.timers.start();
})
.on("commandError", (cmd, err) => {
	if (err instanceof commando.FriendlyError) return;
	log.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
})
.on("commandBlocked", (msg, reason) => {
	log(`Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ""} blocked. ${reason}`);
})
.on("commandPrefixChange", (guild, prefix) => {
	log(`Prefix ${prefix === "" ? "removed" : `changed to ${prefix || "the default"}`} ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
	`);
})
.on("commandStatusChange", (guild, command, enabled) => {
	log(`Command ${command.groupID}:${command.memberName} ${enabled ? "enabled" : "disabled"} ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
	`);
})
.on("groupStatusChange", (guild, group, enabled) => {
	log(`Group ${group.id} ${enabled ? "enabled" : "disabled"} ${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.`);
});

client.login(process.env.BOT_TOKEN);
global.password = process.env.dbpassword;
global.client = client;
global.minutes = 0;
global.cooldown = false;
global.paused = false;
