import registerUserService from "../service/users/register.service";
import refreshUsersService from "../service/users/renew.service";
import logoutUserService from "../service/users/logout.service";
import resetUsersService from "../service/users/reset.service";
import loginUserService from "../service/users/login.service";
import responser from "../function/responser.function";
import { Request, Response } from "express";

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

async function reset(req: Request, res: Response) {
  try {
    await resetUsersService(req, res);
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
  reset,
  logout,
};
