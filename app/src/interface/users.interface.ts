import { IAccessToken, IRefreshToken } from "./tokens.interface";

export type IUserId = string;
export type IUserUsername = string;
export type IUserGender = string;
export type IUserNationality = string;
export type IUserBiography = string;
export type IUserFirstName = string;
export type IUserLastName = string;
export type IUserPhone = string;
export type IUserEmail = string;
export type IUserPassword = string;
export type IUserHobbies = string[];
export type IUserRegisterAt = number;
export type IUserIsVerifiedEmail = boolean;
export type IUserIsVerifiedPhone = boolean;

export interface IRegisterRequest {
  username: IUserUsername;
  gender: IUserGender;
  nationality: IUserNationality;
  biography: IUserBiography;
  firstName: IUserFirstName;
  lastName: IUserLastName;
  phone: IUserPhone;
  email: IUserEmail;
  password: IUserPassword;
  hobbies: IUserHobbies;
}

export interface IRenewRequest {
  accessToken: IAccessToken;
  refreshToken: IRefreshToken;
}

export interface ILoginRequest {
  id: IUserId;
  password: IUserPassword;
}

export interface IResetRequest {
  oldPassword: IUserPassword;
  newPassword: IUserPassword;
}
