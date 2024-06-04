import registerUserService from "../services/register.users.service";
import responser from "../functions/responser.function";
import { Request, Response } from "express";
import loginUserService from "../services/login.users.service";

async function register(req: Request, res: Response) {
  try {
    await registerUserService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error.");
  }
}

async function login(req: Request, res: Response) {
  try {
    await loginUserService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error.");
  }
}

async function logout(req: Request, res: Response) {
  // logout a user
}

export default {
  register,
  login,
  logout,
};
