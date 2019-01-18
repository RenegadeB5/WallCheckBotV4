const { MongoClient } = require("mongodb");

class dataHandler {
	constructor(host = 27017, databaseName = "factions") {
		if (typeof host === "number")
			host = "localhost:" + host;
		this._host = "mongodb+srv://RenegadeB5:" + global.password + "@cluster0-l1qqw.mongodb.net/test?retryWrites=true";
		this._databaseName = databaseName;
		this.exiled = this.db.collection("factionPoints");
		this.client = new MongoClient(this._host, { useNewUrlParser: true });
		this.initialized = false;
	}

	async initialize() {
		await this.client.connect();
		this.db = this.client.db(this._databaseName);
		this.initialized = true;
	}

	get isInitialized() {
		return this.initialized;
	}

	async close() {
		await this.client.close();
		this.db = null;
	}
	async addPoint(user, userid) {
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] === undefined) {
			this.exiled.insertOne({user: user, userid: userid, points: 1});
		}
		else {
			this.exiled.updateOne({userid: userid}, {$set:{user: user, userid: userid, points: member[0].points + 1}});
		}
	}
	async getPoints(userid) {
		return await this.exiled.find({userid: userid}).toArray()[0].points;
	}
}

module.exports = dataHandler;
