import { getJWTFromRequest } from "../helper/converter.helper";
import { Request } from "express-serve-static-core";
import Event from "../class/event.class";

export default function eventsFilter(req: Request, events: Event[]) {
  const jwtUser = getJWTFromRequest(req);

  const filteredEvents = events.map((event) => {
    if (event.creatorId !== jwtUser.id) {
      const { decllinedList, requesterList, acceptedList, ...filteredEvent } =
        event;

      return filteredEvent;
    }

    return event;
  });

  return filteredEvents;
}
