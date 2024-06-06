import { Request } from "express";
import { decodeJwt } from "jose";

export function BearerToJWT(bearerToken: string) {
  const token = bearerToken.split(" ")[1];

  const JWTToken = tokenToJWT(token);

  return JWTToken;
}

export function tokenToJWT(token: string) {
  return decodeJwt(token) as any;
}

export function requestToToken(req: Request) {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const token = authorization.split(" ")[1];

  return token;
}
