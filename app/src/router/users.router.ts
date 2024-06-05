import usersController from "../controller/users.controller";
import express from "express";

const router = express.Router();

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.post("/renew", usersController.renew);

router.post("/reset", usersController.reset);

router.post("/logout", usersController.logout);

export default router;
