// dependencies
import mongodb from 'mongodb';
const { MongoClient } = mongodb

const URI_TO_CONNECT_MONGODB = "mongodb+srv://root:root123@anijitsmongodb.l73ta.mongodb.net/allapps?retryWrites=true&w=majority";
const DB_NAME = "allapps"
const COLLECTION_USER_STICKER = "usersticker"

// this function will connect db and based on API send response
const connectDbAndRunQueries = async (apiName, req, res) => {
	try {
		const client = await new MongoClient(URI_TO_CONNECT_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }).connect()
		// select the db, Collections are selected based on needs
		const db = client.db(DB_NAME)

		// default output
		const output = { "message": "SUCCESS" }

		// perform several db actions based on API names
		chooseApiAndSendResponse(apiName, db, req, res, client, output)
	} catch (err) {
		console.log('Some Error occurred ...', err)
		res.status(503).json({ msg: "Internal Server Error" })
	}
}

// choose the particular function for an API and process it
const chooseApiAndSendResponse = (apiName, db, req, res, client, output) => {

	// perform db specific ops based on API names
	switch (apiName) {
		case 'getAllUsers':
			makeGetAllUsers(db, req, res, client, output)
			break;
	}
}

const makeGetAllUsers = async (db, req, res, client, output) => {

	try {

		// db call 
		const data = await db.collection(COLLECTION_USER_STICKER).find({}).toArray()

		output = (data.length > 0) ? [...data] : []
	} catch (error) {
		console.log('unable to get all the users', error)
	} finally {
		sendResponseAndCloseConnection(client, output, res)
	}
}

// send the response and close the db connection
function sendResponseAndCloseConnection(client, output, res) {
	if (output && res) {
		console.log(`========================\nOUTPUT AS RECEIVED AND BEFORE SENDING\n==================\n`, output)
		res.status(200).json(output)
	} else {
		res.status(503).json({ msg: "Internal Server Error" })
	}

	// close the database connection after sending the response
	client.close()
}

// exports
export {
	connectDbAndRunQueries
}