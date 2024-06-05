import express, { Request, Response, NextFunction } from "express";
import environments from "./src/provider/environments.provider";
import eventsRouters from "./src/router/events.router";
import usersRouters from "./src/router/users.router";
import logger from "./src/function/logger.function";
import appRouters from "./src/router/app.router";
import bodyParser from "body-parser";
import cors from "cors";

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
