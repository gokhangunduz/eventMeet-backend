import { IEnvironment } from "../interfaces/env.interface";
import dotenv from "dotenv";

dotenv.config();

const environments: IEnvironment = {
  database: {
    url: String(process.env.MONGODB_URL),
    name: "eventMeet",
    collections: {
      users: "users",
      events: "events",
    },
  },
  jwt: {
    secret: String(process.env.JWT_SECRET),
    accessTokenExp: "10m",
    refreshTokenExp: "7d",
  },
  application: {
    port: Number(process.env.PORT),
  },
};

export default environments;
