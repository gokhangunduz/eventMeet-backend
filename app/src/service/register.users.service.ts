import environments from "../provider/environments.provider";
import { hashPassword } from "../helper/password.helper";
import { createUser } from "../database/users.database";
import responser from "../function/responser.function";
import mongoDB from "../client/mongo.client";
import { Request, Response } from "express";
import User from "../class/user.class";

export default async function registerUserService(req: Request, res: Response) {
  const {
    gender,
    username,
    nationality,
    biography,
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    hobbies,
  }: {
    username: string;
    gender: string;
    nationality: string;
    biography: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    hobbies: string[];
  } = req.body;

  if (
    !username ||
    !gender ||
    !nationality ||
    !biography ||
    !hobbies ||
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
    gender,
    nationality,
    biography,
    firstName,
    lastName,
    phoneNumber,
    email,
    await hashPassword(password),
    hobbies
  );

  await createUser(user);

  responser(res, 200, "User created.");
}
