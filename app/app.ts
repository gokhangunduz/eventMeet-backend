import express, { Request, Response, NextFunction } from "express";
import environments from "./src/providers/environments.provider";
import eventsRouters from "./src/routers/events.routers";
import usersRouters from "./src/routers/users.routers";
import logger from "./src/functions/logger.function";
import appRouters from "./src/routers/app.routers";
import bodyParser from "body-parser";
import cors from "cors";
import { verifyToken } from "./src/functions/tokener.function";

async function app(): Promise<void> {
  const app = express();

  app.all("/*", function (req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.use(
    bodyParser.json(),
    cors({
      origin: "*",
    })
  );

  app.use("/", appRouters);

  app.use("/users", usersRouters);

  app.use("/events", eventsRouters);

  const server = app.listen(environments.application.port);

  process.on("SIGINT", () => {
    server.close(() => {
      logger("Service is shutting down.");
      process.exit(0);
    });
  });
}

app();
