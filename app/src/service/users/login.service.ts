import { verifyPassword } from "../../function/cryptographer.function";
import { IUserLoginRequest } from "../../interface/user.interface";
import { getUserByEmail } from "../../database/users.database";
import responser from "../../function/responser.function";
import Token from "../../class/token.class";
import { Request, Response } from "express";

export default async function loginUserService(req: Request, res: Response) {
  const { id, password }: IUserLoginRequest = req.body;

  if (!id || !password) {
    responser(res, 400, "Please provide all required fields.");
  }

  const user = await getUserByEmail(id);

  if (!user) {
    responser(res, 400, "User not found.");
    return;
  }

  if (!(await verifyPassword(password, user.password))) {
    responser(res, 400, "Invalid account credentials.");
    return;
  }

  const tokens = await Token.generateTokens(user);

  responser(res, 200, "Login successful.", { ...tokens });
}
