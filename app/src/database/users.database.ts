import environments from "../provider/environments.provider";
import { getJWTFromBearerToken } from "../helper/converter.helper";
import mongoDB from "../client/mongo.client";
import User from "../class/user.class";
import { Request } from "express";

async function createUser(user: User): Promise<void> {
  await mongoDB
    .collection<User>(environments.database.collections.users)
    .insertOne(user);
}

async function getUserByID(id: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { id },
      {
        projection: { _id: 0 },
      }
    );

  return userDB;
}

async function getUserByEmail(email: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { email },
      {
        projection: { _id: 0 },
      }
    );

  return userDB;
}

async function getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { phoneNumber },
      {
        projection: { _id: 0 },
      }
    );

  return userDB;
}

export async function getUserByRequest(req: Request) {
  const { authorization: bearerToken } = req.headers;

  const JWTToken = getJWTFromBearerToken(bearerToken!);

  const user = (await getUserByID(JWTToken.id)) as User;

  return user;
}

async function updateUser(user: User): Promise<void> {
  await mongoDB
    .collection<User>(environments.database.collections.users)
    .updateOne({ id: user.id }, { $set: user });
}

export {
  createUser,
  getUserByID,
  getUserByEmail,
  getUserByPhoneNumber,
  updateUser,
};
