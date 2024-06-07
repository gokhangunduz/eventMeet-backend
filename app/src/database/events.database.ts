import environments from "../provider/environments.provider";
import mongoDB from "../client/mongo.client";
import Event from "../class/event.class";

async function createEvent(event: Event): Promise<void> {
  await mongoDB
    .collection<Event>(environments.database.collections.events)
    .insertOne(event);
}

async function getEvents(page: number, pageSize: number) {
  const events = await mongoDB
    .collection<Event>(environments.database.collections.events)
    .find<Event>({}, { projection: { _id: 0 } })
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .toArray();

  return events;
}

async function getEventByID(id: string): Promise<Event | null> {
  const eventDB = await mongoDB
    .collection<Event>(environments.database.collections.events)
    .findOne<Event>(
      { id },
      {
        projection: { _id: 0 },
      }
    );

  return eventDB;
}
async function updateEvent(event: Event) {
  await mongoDB
    .collection<Event>(environments.database.collections.events)
    .updateOne(
      { id: event.id },
      {
        $set: {
          ...event,
        },
      }
    );
}

async function deleteEvent(id: string) {
  await mongoDB
    .collection<Event>(environments.database.collections.events)
    .deleteOne({ id });
}

export { createEvent, getEvents, getEventByID, updateEvent, deleteEvent };
