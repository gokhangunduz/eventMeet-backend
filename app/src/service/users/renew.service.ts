import { IUserRenewRequest } from "../../interface/user.interface";
import { verifyToken } from "../../function/tokener.function";
import responser from "../../function/responser.function";
import { Request, Response } from "express";
import Token from "../../class/token.class";

export default async function (req: Request, res: Response) {
  const { accessToken, refreshToken }: IUserRenewRequest = req.body;

  if (!(await verifyToken(refreshToken)).isValid) {
    responser(res, 400, "Invalid refresh token.");
  }

  const tokens = new Token({ accessToken, refreshToken });

  await tokens.renewTokens();

  responser(res, 200, "Tokens refreshed.", { ...tokens });
}
