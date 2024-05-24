import express, { Request, Response, NextFunction } from "express";
import logger from "./src/functions/logger.function";
import appRoutes from "./src/routes/app.routes";
import env from "./src/providers/env.provider";
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

  app.use("/", appRoutes);

  const server = app.listen(env.port);

  process.on("SIGINT", () => {
    server.close(() => {
      logger("Service is shutting down.");
      process.exit(0);
    });
  });
}

app();
