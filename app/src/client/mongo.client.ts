import { MongoClient } from "mongodb";
import env from "../provider/environments.provider";

const mongoDB = new MongoClient(env.database.url)?.db(env.database.name);

export default mongoDB;
