import { hasOwnerAtEvent } from "../auth/role.auth";
import Event from "../class/event.class";
import { Request } from "express";

export default function eventsFilter(req: Request, events: Event[]) {
  const filteredEvents = events.map((event) => {
    const hasOwner = hasOwnerAtEvent(req, event);

    if (!hasOwner) {
      const { decllinedList, requesterList, acceptedList, ...filteredEvent } =
        event;

      return filteredEvent;
    }

    return event;
  });

  return filteredEvents;
}
