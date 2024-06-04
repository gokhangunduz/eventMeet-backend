import { MongoClient } from "mongodb";
import env from "../providers/environments.provider";

const mongoDB = new MongoClient(env.database.url)?.db(env.database.name);

export default mongoDB;
