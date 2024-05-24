import { Ienv } from "../interfaces/env.interface";
import dotenv from "dotenv";

dotenv.config();

const env: Ienv = {
  port: Number(process.env.PORT),
};

export default env;
