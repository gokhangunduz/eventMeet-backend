import { Request, Response } from "express";
import responser from "../functions/responser.function";

export default function (req: Request, res: Response) {
  responser(res, 200, "Logout successful.");
}
