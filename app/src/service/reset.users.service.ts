import { hashPassword, verifyPassword } from "../helper/password.helper";
import { getUserFromRequest } from "../helper/auth.helper";
import { updateUser } from "../database/users.database";
import responser from "../function/responser.function";
import { Request, Response } from "express";

export default async function resetUsersService(req: Request, res: Response) {
  const {
    oldPassword,
    newPassword,
  }: {
    oldPassword: string;
    newPassword: string;
  } = req.body;

  if (!oldPassword || !newPassword) {
    responser(res, 400, "Please provide all required fields.");
    return;
  }

  const user = await getUserFromRequest(req);

  if (!(await verifyPassword(oldPassword, user.password))) {
    responser(res, 400, "Invalid account credentials.");
    return;
  }

  await updateUser({ ...user, password: await hashPassword(newPassword) });

  responser(res, 200, "Password updated.");
}
