import express, { Request, Response, NextFunction } from "express";
import logger from "./src/functions/logger.function";
import env from "./src/providers/env.provider";
import bodyParser from "body-parser";
import cors from "cors";
import appRouters from "./src/routers/app.routers";
import eventsRouters from "./src/routers/events.routers";

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

  app.use("/events", eventsRouters);

  const server = app.listen(env.port);

  process.on("SIGINT", () => {
    server.close(() => {
      logger("Service is shutting down.");
      process.exit(0);
    });
  });
}

app();
