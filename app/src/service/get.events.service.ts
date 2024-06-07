import { Request, Response } from "express";
import { getEvents } from "../database/events.database";
import responser from "../function/responser.function";

export default async function getEventsService(req: Request, res: Response) {
  const page = parseInt(req.query.page?.toString() as string);
  const pageSize = parseInt(req.query.pageSize?.toString() as string);

  if (typeof page !== "number" || typeof pageSize !== "number") {
    responser(res, 400, "'page' and 'pageSize' query parameters are required.");
    return;
  }

  const events = await getEvents(page, pageSize);

  responser(res, 200, "Events retrieved successfully", events);
}
