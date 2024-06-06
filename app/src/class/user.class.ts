import {
  generateCurrentUnixTimeStamp,
  generateId,
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
} from "../interface/user.interface";

interface UserParams {
  id?: IUserId;
  registeredAt?: IUserRegisterAt;
  username: IUserUsername;
  firstName: IUserFirstName;
  lastName: IUserLastName;
  gender: IUserGender;
  nationality: IUserNationality;
  biography: IUserBiography;
  hobbies: IUserHobbies;
  phone: IUserPhone;
  email: IUserEmail;
  password: IUserPassword;
  isVerifiedEmail?: IUserIsVerifiedEmail;
  isVerifiedPhone?: IUserIsVerifiedPhone;
}

export default class User {
  public id: IUserId;
  public registeredAt: IUserRegisterAt;
  public username: IUserUsername;
  public firstName: IUserFirstName;
  public lastName: IUserLastName;
  public gender: IUserGender;
  public nationality: IUserNationality;
  public biography: IUserBiography;
  public hobbies: IUserHobbies;
  public phone: IUserPhone;
  public email: IUserEmail;
  public password: IUserPassword;
  public isVerifiedEmail: IUserIsVerifiedEmail;
  public isVerifiedPhone: IUserIsVerifiedPhone;

  constructor({
    id = generateId,
    registeredAt = generateCurrentUnixTimeStamp,
    username,
    firstName,
    lastName,
    gender,
    nationality,
    biography,
    hobbies,
    phone,
    email,
    password,
    isVerifiedEmail = false,
    isVerifiedPhone = false,
  }: UserParams) {
    this.id = id;
    this.registeredAt = registeredAt;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.nationality = nationality;
    this.biography = biography;
    this.hobbies = hobbies;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.isVerifiedEmail = isVerifiedEmail;
    this.isVerifiedPhone = isVerifiedPhone;
  }
}
