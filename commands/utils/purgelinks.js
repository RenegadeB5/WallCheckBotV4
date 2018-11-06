var { Command } = require("discord.js-commando");
module.exports = class SaveDataCommand extends global.utils.baseCommand {
    constructor(client) {
        super(client, {
            name: "purgelinks",
            description: "Purges the party links collection completely.",
            group: "utils",
            memberName: "purgelinks",
            userPermissions: ['ADMINISTRATOR']
        });
    }

    async task(ctx) {
        let data = await ctx.db.remove("partylinks");
        await ctx.message.channel.send("Partylinks has successfully been purged!");
    }
};
