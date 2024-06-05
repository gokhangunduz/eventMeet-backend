import registerUserService from "../services/register.users.service";
import loginUserService from "../services/login.users.service";
import logoutUserService from "../services/logout.users.service";
import responser from "../functions/responser.function";
import { Request, Response } from "express";
import refreshUsersService from "../services/renew.users.service";

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

async function renew(req: Request, res: Response) {
  try {
    await refreshUsersService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error.");
  }
}

async function logout(req: Request, res: Response) {
  try {
    await logoutUserService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error.");
  }
}

export default {
  register,
  login,
  renew,
  logout,
};
