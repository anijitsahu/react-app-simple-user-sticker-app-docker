// local dependencies
import { MongoClient, ObjectId } from "mongodb";

const { URI_TO_CONNECT_MONGODB, DB_NAME } = process.env;

const createConnectionToDB = () => {
  return new MongoClient(URI_TO_CONNECT_MONGODB);
};

const closeConnectionToDB = async (dbClient) => {
  await dbClient.close();
};

const selectDB = (dbClient, dbName = DB_NAME) => {
  return dbClient.db(dbName);
};

const convertToObjectId = (strId) => new ObjectId(strId);

export {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
};
