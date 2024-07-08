import { hashPassword } from "../../function/cryptographer.function";
import { IUserSignUpRequest } from "../../interface/user.interface";
import environments from "../../provider/environments.provider";
import { createUser } from "../../database/users.database";
import responser from "../../function/responser.function";
import mongoDB from "../../client/mongo.client";
import { Request, Response } from "express";
import User from "../../class/user.class";

export default async function signupUserService(req: Request, res: Response) {
  const {
    username,
    firstName,
    lastName,
    phone,
    email,
    password,
  }: IUserSignUpRequest = req.body;

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
      .findOne({ phone })
  ) {
    responser(res, 400, "Phone number already exists.");
    return;
  }

  const user = new User({
    username,
    email,
    phone,
    firstName,
    lastName,
    password: await hashPassword(password),
    registeredIP: req.socket.remoteAddress as string,
  });

  await createUser(user);

  responser(res, 200, "User created.");
}
