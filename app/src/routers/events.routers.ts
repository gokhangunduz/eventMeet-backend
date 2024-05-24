import express from "express";
import eventsServices from "../services/events.services";

const router = express.Router();

router.get("/", eventsServices.get);

router.post("/", eventsServices.post);

router.put("/:id", eventsServices.put);

router.delete("/:id", eventsServices.remove);

export default router;
