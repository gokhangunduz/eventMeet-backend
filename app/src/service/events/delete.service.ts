import { deleteEvent, getEventByID } from "../../database/events.database";
import { IEventDeleteParams } from "../../interface/event.interface";
import responser from "../../function/responser.function";
import { hasOwnerAtEvent } from "../../auth/role.auth";
import { Request, Response } from "express";

export default async function deleteEventService(req: Request, res: Response) {
  const { id }: IEventDeleteParams = req.params as { id: string };

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

  await deleteEvent(id);

  responser(res, 200, "Event deleted.");
}
