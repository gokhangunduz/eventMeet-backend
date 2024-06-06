import {
  generateCurrentUnixTimeStamp,
  generateUserId,
} from "../helper/generator.helper";
import {
  IUserBiography,
  IUserEmail,
  IUserFirstName,
  IUserGender,
  IUserHobbies,
  IUserId,
  IUserIsVerifiedEmail,
  IUserIsVerifiedPhone,
  IUserLastName,
  IUserNationality,
  IUserPassword,
  IUserPhone,
  IUserRegisterAt,
  IUserUsername,
} from "../interface/users.interface";

export default class User {
  public id: IUserId;
  public username: IUserUsername;
  public gender: IUserGender;
  public nationality: IUserNationality;
  public biography: IUserBiography;
  public firstName: IUserFirstName;
  public lastName: IUserLastName;
  public phone: IUserPhone;
  public email: IUserEmail;
  public password: IUserPassword;
  public hobbies: IUserHobbies;
  public registeredAt: IUserRegisterAt;
  public isVerifiedEmail: IUserIsVerifiedEmail;
  public isVerifiedPhone: IUserIsVerifiedPhone;

  constructor(
    username: IUserUsername,
    gender: IUserGender,
    nationality: IUserNationality,
    biography: IUserBiography,
    firstName: IUserFirstName,
    lastName: IUserLastName,
    phone: IUserPhone,
    email: IUserEmail,
    password: IUserPassword,
    hobbies: IUserHobbies,
    id: IUserId = generateUserId,
    registeredAt: IUserRegisterAt = generateCurrentUnixTimeStamp,
    isVerifiedEmail: IUserIsVerifiedEmail = false,
    isVerifiedPhone: IUserIsVerifiedPhone = false
  ) {
    this.id = id;
    this.username = username;
    this.gender = gender;
    this.nationality = nationality;
    this.biography = biography;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.hobbies = hobbies;
    this.registeredAt = registeredAt;
    this.isVerifiedEmail = isVerifiedEmail;
    this.isVerifiedPhone = isVerifiedPhone;
  }
}
