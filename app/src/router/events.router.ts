import eventsController from "../controller/events.controller";
import validator from "../helper/validator.helper";
import EventSchema from "../schema/events.schema";
import express from "express";

const router = express.Router();

router.get(
  "/",
  EventSchema.getEventsValidationRule,
  validator,
  eventsController.getEvents
);

router.get(
  "/:id",
  EventSchema.getEventValidationRule,
  validator,
  eventsController.getEvent
);

router.post(
  "/",
  EventSchema.createEventValidationRule,
  validator,
  eventsController.createEvent
);

router.put(
  "/:id",
  EventSchema.updateEventValidationRule,
  validator,
  eventsController.updateEvent
);

router.delete(
  "/:id",
  EventSchema.deleteEventValidationRule,
  validator,
  eventsController.deleteEvent
);

export default router;
