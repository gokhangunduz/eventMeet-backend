import {
  getCurrentUnixTimeStamp,
  generateId,
} from "../helper/generator.helper";
import {
  IUserAlcoholFrequency,
  IUserBiography,
  IUserBirthday,
  IUserEmail,
  IUserFirstName,
  IUserGender,
  IUserId,
  IUserIsBanned,
  IUserIsDeleted,
  IUserIsDisabled,
  IUserIsVerified,
  IUserIsVerifiedEmail,
  IUserIsVerifiedPhone,
  IUserLastName,
  IUserHometown,
  IUserPassword,
  IUserPasswordUpdatedAt,
  IUserPasswordUpdatedIP,
  IUserPhone,
  IUserPreferredLanguage,
  IUserProfileUpdatedAt,
  IUserProfileUpdatedIP,
  IUserRegisterAt,
  IUserRegisteredIP,
  IUserSmokingFrequency,
  IUserUsername,
  IUserWebsite,
  IUserLocation,
  IUserInterests,
  IUserWorks,
  IUserEducations,
} from "../interface/user.interface";

export default class User {
  public id: IUserId;
  public username: IUserUsername;
  public email: IUserEmail;
  public phone: IUserPhone;
  public firstName: IUserFirstName;
  public lastName: IUserLastName;
  public password: IUserPassword;
  public isVerifiedEmail: IUserIsVerifiedEmail;
  public isVerifiedPhone: IUserIsVerifiedPhone;
  public isVerified: IUserIsVerified;
  public isDisabled: IUserIsDisabled;
  public isDeleted: IUserIsDeleted;
  public isBanned: IUserIsBanned;
  public registeredAt: IUserRegisterAt;
  public registeredIP: IUserRegisteredIP;
  public birthday: IUserBirthday;
  public gender: IUserGender;
  public website: IUserWebsite;
  public hometown: IUserHometown;
  public location: IUserLocation;
  public biography: IUserBiography;
  public works: IUserWorks;
  public educations: IUserEducations;
  public interests: IUserInterests;
  public preferredLanguage: IUserPreferredLanguage;
  public alcoholFrequency: IUserAlcoholFrequency;
  public smokingFrequency: IUserSmokingFrequency;
  public passwordUpdatedAt: IUserPasswordUpdatedAt;
  public passwordUpdatedIP: IUserPasswordUpdatedIP;
  public profileUpdatedAt: IUserProfileUpdatedAt;
  public profileUpdatedIP: IUserProfileUpdatedIP;

  constructor({
    id = generateId(),
    username,
    email,
    phone,
    firstName,
    lastName,
    password,
    isVerifiedEmail = false,
    isVerifiedPhone = false,
    isVerified = false,
    isDisabled = false,
    isDeleted = false,
    isBanned = false,
    registeredAt = getCurrentUnixTimeStamp(),
    registeredIP = undefined,
    birthday = undefined,
    gender = undefined,
    website = undefined,
    hometown = undefined,
    location = undefined,
    biography = undefined,
    works = [],
    educations = [],
    interests = [],
    preferredLanguage = "en",
    passwordUpdatedAt = undefined,
    passwordUpdatedIP = undefined,
    profileUpdatedAt = undefined,
    profileUpdatedIP = undefined,
  }: {
    id?: IUserId;
    username: IUserUsername;
    email: IUserEmail;
    phone: IUserPhone;
    firstName: IUserFirstName;
    lastName: IUserLastName;
    password: IUserPassword;
    isVerifiedEmail?: IUserIsVerifiedEmail;
    isVerifiedPhone?: IUserIsVerifiedPhone;
    isVerified?: IUserIsVerified;
    isDisabled?: IUserIsDisabled;
    isDeleted?: IUserIsDeleted;
    isBanned?: IUserIsBanned;
    registeredAt?: IUserRegisterAt;
    registeredIP?: IUserRegisteredIP;
    birthday?: IUserBirthday;
    gender?: IUserGender;
    website?: IUserWebsite;
    hometown?: IUserHometown;
    location?: IUserLocation;
    biography?: IUserBiography;
    works?: any[];
    educations?: any[];
    interests?: any[];
    preferredLanguage?: IUserPreferredLanguage;
    passwordUpdatedAt?: IUserPasswordUpdatedAt;
    passwordUpdatedIP?: IUserPasswordUpdatedIP;
    profileUpdatedAt?: IUserProfileUpdatedAt;
    profileUpdatedIP?: IUserProfileUpdatedIP;
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.isVerifiedEmail = isVerifiedEmail;
    this.isVerifiedPhone = isVerifiedPhone;
    this.isVerified = isVerified;
    this.isDisabled = isDisabled;
    this.isDeleted = isDeleted;
    this.isBanned = isBanned;
    this.registeredAt = registeredAt;
    this.registeredIP = registeredIP;
    this.birthday = birthday;
    this.gender = gender;
    this.website = website;
    this.hometown = hometown;
    this.location = location;
    this.biography = biography;
    this.works = works;
    this.educations = educations;
    this.interests = interests;
    this.preferredLanguage = preferredLanguage;
    this.passwordUpdatedAt = passwordUpdatedAt;
    this.passwordUpdatedIP = passwordUpdatedIP;
    this.profileUpdatedAt = profileUpdatedAt;
    this.profileUpdatedIP = profileUpdatedIP;
  }
}
