import environments from "../providers/environments.provider";
import mongoDB from "../clients/mongo.client";
import User from "../class/user.class";

async function createUser(user: User): Promise<void> {
  await mongoDB
    .collection<User>(environments.database.collections.users)
    .insertOne(user);
}

async function getUserByID(id: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { id },
      {
        projection: { _id: 0 },
      }
    );

  if (!userDB) {
    return null;
  }

  return userDB;
}

async function getUserByEmail(email: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { email },
      {
        projection: { _id: 0 },
      }
    );

  if (!userDB) {
    return null;
  }
  return userDB;
}

async function getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
  const userDB = await mongoDB
    .collection<User>(environments.database.collections.users)
    .findOne<User>(
      { phoneNumber },
      {
        projection: { _id: 0 },
      }
    );

  if (!userDB) {
    return null;
  }

  return userDB;
}

async function updateUser(user: User): Promise<void> {
  await mongoDB
    .collection<User>(environments.database.collections.users)
    .updateOne({ id: user.id }, { $set: user });
}

export {
  createUser,
  getUserByID,
  getUserByEmail,
  getUserByPhoneNumber,
  updateUser,
};
