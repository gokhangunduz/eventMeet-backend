import eventsController from "../controller/events.controller";
import express from "express";

const router = express.Router();

router.get("/", eventsController.getEvents);

router.get("/:id", eventsController.getEvent);

router.post("/", eventsController.createEvent);

router.put("/:id", eventsController.updateEvent);

router.delete("/:id", eventsController.deleteEvent);

export default router;
