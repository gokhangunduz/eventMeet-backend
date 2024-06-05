import responser from "../function/responser.function";
import { Request, Response } from "express";

async function get(req: Request, res: Response) {
  responser(res, 200, "Service is running.");
}

export default {
  get,
};
