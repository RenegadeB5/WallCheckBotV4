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
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] === undefined) {
			exiled.insertOne({user: user, userid: userid, points: 1});
		}
		else {
			exiled.updateOne({userid: userid}, {$set:{user: user, userid: userid, points: member[0].points + 1}});
		}
	}
	async getPoints(userid) {
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		return member[0].points;
	}
	async getLB(set) {
		let exiled = this.db.collection("factionPoints");
		let lb = '';
		let lbdata = await exiled.find().sort({points: -1}).toArray();
		let pages = lbdata.length / 100 % 10 * 10 + 1;
		for (var i = 0; i <= lbdata.length - 1; i++) {
			lb = lb + ('\n' + lbdata[i].user + ': ' + lbdata[i].points)
		}
		console.log(lb);
		console.log(pages);
	}
}

module.exports = dataHandler;
