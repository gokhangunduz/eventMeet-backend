import express from "express";
import appServices from "../services/app.services";

const router = express.Router();

router.get("/", appServices.get);

export default router;
