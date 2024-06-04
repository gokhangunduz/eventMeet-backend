import environments from "../providers/environments.provider";
import { generateToken } from "../functions/tokener.function";
import responser from "../functions/responser.function";
import mongoDB from "../clients/mongo.client";
import { Request, Response } from "express";
import User from "../class/user.class";

export default async function loginUserService(req: Request, res: Response) {
  const { id, password } = req.body;

  if (!id || !password) {
    responser(res, 400, "Please provide all required fields.");
  }

  const user = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne({ email: id });

  if (!user) {
    responser(res, 400, "User not found.");
    return;
  }

  if (user.password !== password) {
    responser(res, 400, "Invalid account credentials.");
    return;
  }

  const tokens = await generateToken(user);

  responser(res, 200, "Login successful.", { ...tokens });
}
