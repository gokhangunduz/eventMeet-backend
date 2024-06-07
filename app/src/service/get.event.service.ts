import { getEventByID } from "../database/events.database";
import responser from "../function/responser.function";
import eventsFilter from "../filter/events.filter";
import { Request, Response } from "express";

export default async function getEventService(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    responser(res, 400, "Please provide all required fields.");
    return;
  }

  const event = await getEventByID(id);

  const filteredEvent = eventsFilter(req, [event!])?.[0];

  responser(res, 200, "Event retrieved successfully", filteredEvent);
}
