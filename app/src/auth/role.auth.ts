import { getJWTFromRequest } from "../helper/converter.helper";
import Event from "../class/event.class";
import { Request } from "express";

export function hasOwnerAtEvent(req: Request, event: Event): boolean {
  const jwtUser = getJWTFromRequest(req);

  return event.creatorId === jwtUser.id ? true : false;
}
