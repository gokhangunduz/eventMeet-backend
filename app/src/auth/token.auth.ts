import { getTokenFromRequest } from "../helper/converter.helper";
import { verifyToken } from "../function/tokener.function";
import { Request, Response, NextFunction } from "express";
import responser from "../function/responser.function";

export async function requestTokenChecker(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const excludePaths = ["/users/login", "/users/signup", "/users/renew"];

  if (excludePaths.includes(req.path)) {
    next();
    return;
  }

  const token = getTokenFromRequest(req);

  if (!token) {
    responser(res, 401, "Unauthorized. Token not found. Please login.");
    return;
  }

  const statusToken = await verifyToken(token);

  if (!statusToken.isValid) {
    responser(res, 401, "Unauthorized. Token is invalid. Please login.");
    return;
  }

  next();
}
