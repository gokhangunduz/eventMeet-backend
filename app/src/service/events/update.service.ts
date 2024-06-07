import {
  IEventUpdateParams,
  IEventUpdateRequest,
} from "../../interface/event.interface";
import { getEventByID, updateEvent } from "../../database/events.database";
import responser from "../../function/responser.function";
import { hasOwnerAtEvent } from "../../auth/role.auth";
import { Request, Response } from "express";

export default async function updateEventService(req: Request, res: Response) {
  const { id }: IEventUpdateParams = req.params as { id: string };
  const {
    title,
    description,
    location,
    startAt,
    endAt,
    participantList,
  }: IEventUpdateRequest = req.body;

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

  const oldEvent = await getEventByID(id);

  if (!oldEvent) {
    responser(res, 404, "Event not found.");
    return;
  }

  const hasOwner = hasOwnerAtEvent(req, oldEvent);

  if (!hasOwner) {
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
