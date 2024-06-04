import express from "express";
import eventsController from "../controllers/events.controller";

const router = express.Router();

router.get("/", eventsController.get);

router.post("/", eventsController.post);

router.put("/:id", eventsController.put);

router.delete("/:id", eventsController.remove);

export default router;
