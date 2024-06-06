import { IAccessToken, IRefreshToken } from "./token.interface";

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

export interface IUserRegisterRequest {
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

export interface IUserRenewRequest {
  accessToken: IAccessToken;
  refreshToken: IRefreshToken;
}

export interface IUserLoginRequest {
  id: IUserId;
  password: IUserPassword;
}

export interface IUserResetRequest {
  oldPassword: IUserPassword;
  newPassword: IUserPassword;
}
