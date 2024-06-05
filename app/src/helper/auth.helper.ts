import { Request } from "express";
import { BearerToJWT } from "./converter.helper";
import { getUserByID } from "../database/users.database";
import User from "../class/user.class";

export async function getUserFromRequest(req: Request) {
  const { authorization: bearerToken } = req.headers;

  const JWTToken = BearerToJWT(bearerToken!);

  const user = (await getUserByID(JWTToken.id)) as User;

  return user;
}
