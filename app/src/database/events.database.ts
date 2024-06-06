import mongoDB from "../client/mongo.client";
import environments from "../provider/environments.provider";
import Event from "../class/event.class";

async function createEvent(event: Event): Promise<void> {
  await mongoDB
    .collection<Event>(environments.database.collections.events)
    .insertOne(event);
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

export { createEvent, getEventByID, updateEvent };
