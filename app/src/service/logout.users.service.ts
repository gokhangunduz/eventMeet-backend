import responser from "../function/responser.function";
import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  responser(res, 200, "Logout successful.");
}
