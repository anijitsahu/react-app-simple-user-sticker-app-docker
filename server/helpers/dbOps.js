// dependencies

import { sendResponse } from "./sendResponse.js";
import {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
} from "./dbHelpers.js";

// logger
import { logger } from "./logOps.js";

const { COLLECTION_USER_STICKER, SUCCESS, SERVER_ERR } = process.env;

const getAllUsers = async (req, res) => {
  const dbClient = createConnectionToDB();

  try {
    const db = selectDB(dbClient);

    // db call
    const data = await db
      .collection(COLLECTION_USER_STICKER)
      .find({})
      .toArray();

    let output = data.length > 0 ? [...data] : [];
    sendResponse(SUCCESS, output, res);
  } catch (error) {
    let output = { message: "FAILED", error: JSON.stringify(error) };
    logger.info("unable to get all the users", error);
    sendResponse(SERVER_ERR, output, res);
  } finally {
    await closeConnectionToDB(dbClient);
  }
};

// exports
export { getAllUsers };
