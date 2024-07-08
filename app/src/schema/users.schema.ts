import { body, check, ValidationChain } from "express-validator";

const UserUsernameSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Username is required.")
    .isString()
    .withMessage("Username must be a string.")
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 and 20 characters.")
    .isLowercase()
    .withMessage("Username must be lowercase.")
    .matches(/^[a-zA-Z0-9]+$/) // English letters and numbers only
    .withMessage("Username must contain only English letters and numbers.");
};

const UserEmailSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Email is required.")
    .isString()
    .withMessage("Email must be a string.")
    .isEmail()
    .withMessage("Please enter a valid email address.");
};

const UserPhoneSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Phone is required.")
    .isString()
    .withMessage("Phone must be a string.")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be between 10 and 15 characters.")
    .matches(/^[0-9]+$/) // Numbers only
    .withMessage("Phone must contain only numbers.");
};

const UserFirstNameSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("First name is required.")
    .isString()
    .withMessage("First name must be a string.")
    .isLength({ min: 2, max: 20 })
    .withMessage("First name must be between 2 and 20 characters.")
    .matches(/^[\p{L}]+$/u) // Latin letters only
    .withMessage("First name must contain only Latin letters.");
};

const UserLastNameSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Last name is required.")
    .isString()
    .withMessage("Last name must be a string.")
    .isLength({ min: 2, max: 20 })
    .withMessage("Last name must be between 2 and 20 characters.")
    .matches(/^[\p{L}]+$/u) // Latin letters only
    .withMessage("First name must contain only Latin letters.");
};

const UserPasswordSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Password is required.")
    .isString()
    .withMessage("Password must be a string.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.");
};

const UserGenderSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Gender is required.")
    .isString()
    .withMessage("Gender must be a string.")
    .matches(/^(male|female|other)$/)
    .withMessage("Gender must be one of the following: male, female, other.");
};

const UserHometownSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Hometown is required.")
    .isString()
    .withMessage("Hometown must be a string.");
};

const UserLocationSchema = (f: ValidationChain) => {
  return f
    .notEmpty()
    .withMessage("Location is required.")
    .isString()
    .withMessage("Location must be a string.");
};

const signupUserSchema = [
  UserUsernameSchema(body("username")),
  UserFirstNameSchema(body("firstName")),
  UserLastNameSchema(body("lastName")),
  UserPasswordSchema(body("password")),
  UserPhoneSchema(body("phone")),
  UserEmailSchema(body("email")),
];

const loginUserSchema = [
  UserEmailSchema(body("id")),
  UserPasswordSchema(body("password")),
];

const renewUserSchema = [
  check("accessToken").notEmpty().withMessage("Access Token is required."),
  check("refreshToken").notEmpty().withMessage("Refresh Token is required."),
];

const resetUserSchema = [
  UserEmailSchema(body("oldPassword")),
  UserPasswordSchema(body("newPassword")),
];

const logoutUserSchema: ValidationChain[] = [];

export default {
  signupUserSchema,
  loginUserSchema,
  renewUserSchema,
  resetUserSchema,
  logoutUserSchema,
};
