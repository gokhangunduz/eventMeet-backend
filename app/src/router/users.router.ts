import usersController from "../controller/users.controller";
import validator from "../helper/validator.helper";
import eventSchema from "../schema/users.schema";
import express from "express";

const router = express.Router();

router.post(
  "/signup",
  eventSchema.signupUserSchema,
  validator,
  usersController.signup
);

router.post(
  "/login",
  eventSchema.loginUserSchema,
  validator,
  usersController.login
);

router.post(
  "/renew",
  eventSchema.renewUserSchema,
  validator,
  usersController.renew
);

router.post(
  "/reset",
  eventSchema.resetUserSchema,
  validator,
  usersController.reset
);

router.post(
  "/logout",
  eventSchema.logoutUserSchema,
  validator,
  usersController.logout
);

export default router;
