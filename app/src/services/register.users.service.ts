import User from "../class/user.class";
import { Request, Response } from "express";
import mongoDB from "../clients/mongo.client";
import responser from "../functions/responser.function";
import environments from "../providers/environments.provider";

export default async function registerUserService(req: Request, res: Response) {
  const { username, firstName, lastName, phoneNumber, email, password } =
    req.body;

  if (
    !username ||
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !email ||
    !password
  ) {
    responser(res, 400, "Please provide all required fields.");
    return;
  }

  if (
    await mongoDB
      .collection(environments.database.collections.users)
      .findOne({ email })
  ) {
    responser(res, 400, "Email already exists.");
    return;
  }

  if (
    await mongoDB
      .collection(environments.database.collections.users)
      .findOne({ username })
  ) {
    responser(res, 400, "Username already exists.");
    return;
  }

  if (
    await mongoDB
      .collection(environments.database.collections.users)
      .findOne({ phoneNumber })
  ) {
    responser(res, 400, "Phone number already exists.");
    return;
  }

  const user = new User(
    username,
    firstName,
    lastName,
    phoneNumber,
    email,
    password
  );

  await mongoDB
    .collection(environments.database.collections.users)
    .insertOne(user);

  responser(res, 200, "User created.");
}
