import { verifyToken } from "../function/tokener.function";
import responser from "../function/responser.function";
import { Token } from "../class/token.class";
import { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  const { accessToken, refreshToken } = req.body;

  if (!accessToken || !refreshToken) {
    responser(res, 400, "Please provide all tokens.");
  }

  if (!(await verifyToken(refreshToken)).isValid) {
    responser(res, 400, "Invalid refresh token.");
  }

  const tokens = new Token(accessToken, refreshToken);

  await tokens.renewTokens();

  responser(res, 200, "Tokens refreshed.", { ...tokens });
}
