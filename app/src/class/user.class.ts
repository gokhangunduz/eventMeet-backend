import {
  generateUserID,
  generateCurrentUnixTimeStamp,
} from "../helper/generator.helper";

export default class User {
  public id: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public email: string;
  public password: string;
  public registeredAt: number;
  public isVerifiedEmail: boolean;
  public isVerifiedPhoneNumber: boolean;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    id: string = generateUserID,
    registeredAt: number = generateCurrentUnixTimeStamp,
    isVerifiedEmail: boolean = false,
    isVerifiedPhoneNumber: boolean = false
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.registeredAt = registeredAt;
    this.isVerifiedEmail = isVerifiedEmail;
    this.isVerifiedPhoneNumber = isVerifiedPhoneNumber;
  }
}