import { Request, Response, NextFunction } from "express";
import responser from "../function/responser.function";
import { validationResult } from "express-validator";

export default function propsValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return responser(res, 400, "Validation errors.", {
      errors: errors.array(),
    });
  }
  next();
}
