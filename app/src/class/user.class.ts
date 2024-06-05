import {
  generateUserID,
  generateCurrentUnixTimeStamp,
} from "../helper/generator.helper";

export default class User {
  public id: string;
  public username: string;
  public gender: string;
  public nationailty: string;
  public biography: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public email: string;
  public password: string;
  public hobbies: string[];
  public registeredAt: number;
  public isVerifiedEmail: boolean;
  public isVerifiedPhoneNumber: boolean;

  constructor(
    id: string = generateUserID,
    username: string,
    gender: string,
    nationailty: string,
    biography: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    hobbies: string[],
    registeredAt: number = generateCurrentUnixTimeStamp,
    isVerifiedEmail: boolean = false,
    isVerifiedPhoneNumber: boolean = false
  ) {
    this.id = id;
    this.username = username;
    this.gender = gender;
    this.nationailty = nationailty;
    this.biography = biography;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.hobbies = hobbies;
    this.registeredAt = registeredAt;
    this.isVerifiedEmail = isVerifiedEmail;
    this.isVerifiedPhoneNumber = isVerifiedPhoneNumber;
  }
}
