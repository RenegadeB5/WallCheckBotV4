const { MongoClient } = require("mongodb");

class dataHandler {
	constructor(host = 27017, databaseName = "factions") {
		if (typeof host === "number")
			host = "localhost:" + host;
		this._host = "mongodb+srv://RenegadeB5:" + process.env.dbpassword + "@cluster0-l1qqw.mongodb.net/test?retryWrites=true";
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
	async addPoint(user, userid, points) {
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] === undefined) {
			exiled.insertOne({user: user, userid: userid, points: 1});
		}
		else {
			exiled.updateOne({userid: userid}, {$set:{user: user, userid: userid, points: member[0].points + points}});
		}
	}
	async getPoints(userid) {
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] === undefined) return 0;
		return member[0].points;
	}
	
	async addInfo(user, userid, ign) {
		let exiled = this.db.collection("factionPoints");
		exiled.insertOne({user: user, userid: userid, ign: ign, points: 0});
	}
	
	async register(user, userid, ign) {
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		let points = 0
		if (member[0] !== undefined) {points = member[0].points;}
		if (member[0] === undefined) {exiled.insertOne({user: user, userid: userid, ign: ign, points: 0});}
		else {exiled.updateOne({userid: userid}, {$set:{user: user, userid: userid, points: points, ign: ign}});}
	}
	
	async isRegistered(userid) {
		let exiled = this.db.collection("factionPoints");
		let member = await exiled.find({userid: userid}).toArray();
		if (member[0] !== undefined) {return 'registered';}
		else {return 'unregistered';}
	}
		
	async getLB(page) {
		let exiled = this.db.collection("factionPoints");
		let lb = '';
		let lbdata = await exiled.find().sort({points: -1}).toArray();
		let pages = await Math.floor((lbdata.length / 100 % 10 * 10) + 1);
		let limit = 0;
		if (page === pages) {
			limit = lbdata.length - 1;
		}
		else {
			limit = page * 10 - 1;
		}
		for (var i = (page - 1) * 10; i <= limit; i++) {
			lb = lb + ('\n' + (i + 1) + ': ' + lbdata[i].user + ' with ' + lbdata[i].points + ' points')
		}
		return [lb, pages];
	}
}

module.exports = dataHandler;
