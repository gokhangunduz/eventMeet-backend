import { decodeJwt } from "jose";

export function BearerToJWT(bearerToken: string) {
  const token = bearerToken.split(" ")[1];

  const JWTToken = tokenToJWT(token);

  return JWTToken;
}

export function tokenToJWT(token: string) {
  return decodeJwt(token) as any;
}
