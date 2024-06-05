import { Request, Response } from "express";

async function get(req: Request, res: Response) {
  // get all events
}

async function post(req: Request, res: Response) {
  // create an event
}

async function put(req: Request, res: Response) {
  // update an event
}

async function remove(req: Request, res: Response) {
  // delete an event
}

export default {
  get,
  post,
  put,
  remove,
};
