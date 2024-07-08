import { IAccessToken, IRefreshToken } from "./token.interface";

export type IUserId = string;
export type IUserUsername = string;
export type IUserEmail = string;
export type IUserPhone = string;
export type IUserFirstName = string;
export type IUserLastName = string;
export type IUserPassword = string;
export type IUserIsVerifiedEmail = boolean;
export type IUserIsVerifiedPhone = boolean;
export type IUserIsVerified = boolean;
export type IUserIsDisabled = boolean;
export type IUserIsBanned = boolean;
export type IUserIsDeleted = boolean;
export type IUserRegisterAt = number;
export type IUserRegisteredIP = string | undefined;
export type IUserGender = "male" | "female" | "other" | undefined;
export type IUserHometown = string | undefined;
export type IUserLocation = string | undefined;
export type IUserBirthday = number | undefined;
export type IUserBiography = string | undefined;
export type IUserWorks = any[];
export type IUserEducations = any[];
export type IUserInterests = any[];
export type IUserWebsite = string | undefined;
export type IUserPreferredLanguage = string;
export type IUserAlcoholFrequency =
  | "never"
  | "rarely"
  | "sometimes"
  | "often"
  | "always"
  | undefined;
export type IUserSmokingFrequency =
  | "never"
  | "rarely"
  | "sometimes"
  | "often"
  | "always"
  | undefined;
export type IUserPasswordUpdatedAt = number | undefined;
export type IUserPasswordUpdatedIP = string | undefined;
export type IUserProfileUpdatedAt = number | undefined;
export type IUserProfileUpdatedIP = string | undefined;

export interface IUserSignUpRequest {
  username: IUserUsername;
  gender: IUserGender;
  firstName: IUserFirstName;
  lastName: IUserLastName;
  phone: IUserPhone;
  email: IUserEmail;
  password: IUserPassword;
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
