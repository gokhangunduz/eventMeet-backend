import { Request, Response } from "express";
import { deleteEvent, getEventByID } from "../database/events.database";
import responser from "../function/responser.function";
import { getJWTFromRequest } from "../helper/converter.helper";

export default async function deleteEventService(req: Request, res: Response) {
  const { id } = req.params;

  const oldEvent = await getEventByID(id);

  const jwtUser = getJWTFromRequest(req);

  if (!oldEvent) {
    responser(res, 404, "Event not found.");
    return;
  }

  if (oldEvent.creatorId !== jwtUser.id) {
    responser(
      res,
      401,
      "Unauthorized action. You are not the creator of this event."
    );
    return;
  }

  await deleteEvent(id);

  responser(res, 200, "Event deleted.");
}
