import { IUserRegisterRequest } from "../../interface/user.interface";
import { hashPassword } from "../../function/cryptographer.function";
import environments from "../../provider/environments.provider";
import { createUser } from "../../database/users.database";
import responser from "../../function/responser.function";
import mongoDB from "../../client/mongo.client";
import { Request, Response } from "express";
import User from "../../class/user.class";

export default async function registerUserService(req: Request, res: Response) {
  const {
    gender,
    username,
    nationality,
    biography,
    firstName,
    lastName,
    phone,
    email,
    password,
    hobbies,
  }: IUserRegisterRequest = req.body;

  if (
    !username ||
    !gender ||
    !nationality ||
    !biography ||
    !hobbies ||
    !firstName ||
    !lastName ||
    !phone ||
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
      .findOne({ phone })
  ) {
    responser(res, 400, "Phone number already exists.");
    return;
  }

  const user = new User({
    username,
    firstName,
    lastName,
    gender,
    nationality,
    biography,
    hobbies,
    phone,
    email,
    password: await hashPassword(password),
  });

  await createUser(user);

  responser(res, 200, "User created.");
}
