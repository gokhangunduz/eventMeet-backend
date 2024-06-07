import { getEvents } from "../../database/events.database";
import responser from "../../function/responser.function";
import eventsFilter from "../../filter/events.filter";
import { Request, Response } from "express";

export default async function getEventsService(req: Request, res: Response) {
  const page = parseInt(req.query.page?.toString() as string);
  const pageSize = parseInt(req.query.pageSize?.toString() as string);

  if (typeof page !== "number" || typeof pageSize !== "number") {
    responser(res, 400, "'page' and 'pageSize' query parameters are required.");
    return;
  }

  const events = await getEvents(page, pageSize);

  const filteredEvents = eventsFilter(req, events);

  responser(res, 200, "Events retrieved successfully", filteredEvents);
}
