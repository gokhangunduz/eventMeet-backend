import { IEventCreateRequest } from "../interface/event.interface";
import { getJWTFromRequest } from "../helper/converter.helper";
import { createEvent } from "../database/events.database";
import responser from "../function/responser.function";
import { Request, Response } from "express";
import Event from "../class/event.class";

export default async function createEventService(req: Request, res: Response) {
  const {
    title,
    description,
    location,
    startAt,
    endAt,
    participantList,
  }: IEventCreateRequest = req.body;

  if (!title || !description || !location || !startAt || !endAt) {
    responser(res, 400, "Please provide all required fields.");
    return;
  }

  const jwtUser = getJWTFromRequest(req);

  const event = new Event({
    creatorId: jwtUser.id,
    title,
    description,
    location,
    startAt,
    endAt,
    participantList,
  });

  await createEvent(event);

  responser(res, 200, "Event created.");
}
