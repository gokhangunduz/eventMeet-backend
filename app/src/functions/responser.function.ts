import logger from "./logger.function";
import { Response } from "express";

export default function (
  response: Response,
  status: number,
  message: string,
  data?: any
) {
  logger(
    `[${response.req.method} ${status} - "${response.req.originalUrl}"] ${message}`
  );
  response.status(status).json({
    success: status < 300 ? true : false,
    message: message,
    data: data,
  });
}
