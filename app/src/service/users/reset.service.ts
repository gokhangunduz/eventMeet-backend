import {
  hashPassword,
  verifyPassword,
} from "../../function/cryptographer.function";
import { getUserByRequest, updateUser } from "../../database/users.database";
import { IUserResetRequest } from "../../interface/user.interface";
import responser from "../../function/responser.function";
import { Request, Response } from "express";

export default async function resetUsersService(req: Request, res: Response) {
  const { oldPassword, newPassword }: IUserResetRequest = req.body;

  const user = await getUserByRequest(req);

  if (!(await verifyPassword(oldPassword, user.password))) {
    responser(res, 400, "Invalid account credentials.");
    return;
  }

  await updateUser({ ...user, password: await hashPassword(newPassword) });

  responser(res, 200, "Password updated.");
}
