import usersController from "../controllers/users.controller";
import express from "express";

const router = express.Router();

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.post("/renew", usersController.renew);

router.post("/logout", usersController.logout);

export default router;
