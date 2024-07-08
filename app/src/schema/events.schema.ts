import { body, param, query, ValidationChain } from "express-validator";

const getEventsValidationRule = [
  query("page")
    .isInt({ min: 1 })
    .withMessage("Page must be a positive integer.")
    .toInt(),
  query("pageSize")
    .isInt({ min: 1 })
    .withMessage("Page size must be a positive integer.")
    .toInt(),
];

const getEventValidationRule: ValidationChain[] = [
  param("id").isEmpty().withMessage("Invalid event ID."),
];

const createEventValidationRule: ValidationChain[] = [
  body("title").notEmpty().withMessage("Title is required."),
  body("description").notEmpty().withMessage("Description is required."),
  body("location").notEmpty().withMessage("Location is required."),
  body("startAt")
    .notEmpty()
    .withMessage("Start date and time are required.")
    .isInt()
    .withMessage("Start date and time must be a integer.")
    .toInt(),
  body("endAt")
    .notEmpty()
    .withMessage("End date and time are required.")
    .isInt()
    .withMessage("End date and time must be a integer.")
    .toInt(),
  body("participantList")
    .optional()
    .isArray()
    .withMessage("Participant list must be an array."),
];

const updateEventValidationRule: ValidationChain[] = [
  param("id").notEmpty().withMessage("Id is required."),
  body("title").optional().notEmpty().withMessage("Title is required."),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("Description is required."),
  body("location").optional().notEmpty().withMessage("Location is required."),
  body("startAt")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Start date and time must be a integer.")
    .toInt(),
  body("endAt")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("End date and time must be a integer.")
    .toInt(),
  body("participantList")
    .optional()
    .isArray()
    .withMessage("Participant list must be an array."),
];

const deleteEventValidationRule: ValidationChain[] = [];

export default {
  getEventsValidationRule,
  getEventValidationRule,
  createEventValidationRule,
  updateEventValidationRule,
  deleteEventValidationRule,
};
