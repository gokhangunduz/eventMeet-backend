import environments from "../providers/environments.provider";
import { getUserByID } from "../database/users.database";
import { decodeJwt, jwtVerify, SignJWT } from "jose";
import User from "../class/user.class";

export async function generateTokens(user: User) {
  const secretKey = new TextEncoder().encode(environments.jwt.secret);

  const accessToken = await new SignJWT({ ...user })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(environments.jwt.accessTokenExp)
    .sign(Uint8Array.from(secretKey));

  const refreshToken = await new SignJWT({ ...user })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(environments.jwt.refreshTokenExp)
    .sign(Uint8Array.from(secretKey));

  return { accessToken, refreshToken };
}

export async function renewTokens(refreshToken: string) {
  const refreshJWT = decodeJwt(refreshToken) as any;

  const user = await getUserByID(refreshJWT.id);

  const tokens = await generateTokens(user!);

  return { ...tokens };
}

export async function verifyToken(token: string): Promise<{
  isValid: boolean;
  message: string;
}> {
  const secretKey = new TextEncoder().encode(environments.jwt.secret);

  const result = await jwtVerify(token, secretKey, {
    algorithms: ["HS256"],
  })
    .then(() => {
      return {
        isValid: true,
        message: "Token is valid.",
      };
    })
    .catch((error) => {
      return {
        isValid: false,
        message: String(error?.code) || "Token is invalid.",
      };
    });

  return result;
}
