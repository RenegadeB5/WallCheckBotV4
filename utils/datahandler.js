const { MongoClient } = require("mongodb");

class dataHandler {
	constructor(host = 27017, databaseName = "factions") {
		if (typeof host === "number")
			host = "localhost:" + host;
		this._host = "mongodb+srv://RenegadeB5:" + global.password + "@cluster0-l1qqw.mongodb.net/test?retryWrites=true";
		this._databaseName = databaseName;
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
		let exiled = await this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] === undefined) {
			exiled.insertOne({user: user, userid: userid, points: 1});
		}
		else {
			let points = member.points;
			console.log(points);
			exiled.updateOne({userid: userid}, {user: user, userid: userid, points: points += 1});
		}
	}
	async fetchLink(query) {
		let links = await this.db.collection("partylinks");
		return await links.find(query).sort({_id:-1}).limit(1).toArray();
		
	}
	async remove1Link() {
		let links = await this.db.collection("partylinks");
		return await links.findOneAndDelete({});
	}
	
	async purgeLinks() {
		let links = await this.db.collection("partylinks");
		links.deleteMany({});
	}
}

module.exports = dataHandler;
