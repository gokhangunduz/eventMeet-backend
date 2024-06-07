import { getEventByID, updateEvent } from "../database/events.database";
import { getJWTFromRequest } from "../helper/converter.helper";
import responser from "../function/responser.function";
import { Request, Response } from "express";

export default async function updateEventService(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, location, startAt, endAt, participantList } =
    req.body;

  if (
    !id ||
    !title ||
    !description ||
    !location ||
    !startAt ||
    !endAt ||
    !participantList
  ) {
    responser(res, 400, "Please provide all required fields.");
    return;
  }

  const jwtUser = getJWTFromRequest(req);

  const oldEvent = await getEventByID(id);

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

  await updateEvent({
    ...oldEvent,
    title,
    description,
    location,
    startAt,
    endAt,
    participantList,
  });

  responser(res, 200, "Event updated.");
}
