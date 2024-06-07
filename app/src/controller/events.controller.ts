import { Request, Response } from "express";
import createEventService from "../service/create.events.service";
import responser from "../function/responser.function";
import getEventsService from "../service/get.events.service";

async function getEvents(req: Request, res: Response) {
  try {
    await getEventsService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function getEvent(req: Request, res: Response) {
  // get all events
}

async function createEvent(req: Request, res: Response) {
  try {
    await createEventService(req, res);
  } catch (error) {
    responser(res, 500, "Internal server error. Please try again later.");
  }
}

async function updateEvent(req: Request, res: Response) {
  // update an event
}

async function deleteEvent(req: Request, res: Response) {
  // delete an event
}

export default {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
