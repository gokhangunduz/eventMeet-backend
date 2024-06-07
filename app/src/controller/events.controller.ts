import createEventService from "../service/create.events.service";
import updateEventService from "../service/update.event.service";
import getEventsService from "../service/get.events.service";
import getEventService from "../service/get.event.service";
import responser from "../function/responser.function";
import { Request, Response } from "express";
import deleteEventService from "../service/delete.event.service";

async function getEvents(req: Request, res: Response) {
  try {
    await getEventsService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function getEvent(req: Request, res: Response) {
  try {
    await getEventService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function createEvent(req: Request, res: Response) {
  try {
    await createEventService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function updateEvent(req: Request, res: Response) {
  try {
    await updateEventService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function deleteEvent(req: Request, res: Response) {
  try {
    await deleteEventService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

export default {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
