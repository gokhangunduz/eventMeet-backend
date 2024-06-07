import createEventService from "../service/events/create.service";
import updateEventService from "../service/events/update.service";
import getEventService from "../service/events/getSingle.service";
import deleteEventService from "../service/events/delete.service";
import getEventsService from "../service/events/get.service";
import responser from "../function/responser.function";
import { Request, Response } from "express";

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
