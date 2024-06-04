import express from "express";
import appController from "../controllers/app.controller";

const router = express.Router();

router.get("/", appController.get);

export default router;
