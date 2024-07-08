import { IUserId } from "./user.interface";

export type IEventId = string;
export type IEventCreatorId = IUserId;
export type IEventCreatedAt = number;
export type IEventUpdatedAt = number | undefined;
export type IEventTitle = string;
export type IEventDescription = string;
export type IEventLocation = string;
export type IEventStartAt = number;
export type IEventEndAt = number;
export type IEventParticipantList = IUserId[];
export type IEventRequesterList = IUserId[];
export type IEventAcceptedList = IUserId[];
export type IEventDecllinedList = IUserId[];
export type IEventComments = any[];

export interface IEventCreateRequest {
  title: IEventTitle;
  description: IEventDescription;
  location: IEventLocation;
  startAt: IEventStartAt;
  endAt: IEventEndAt;
  participantList: IEventParticipantList;
}

export interface IEventGetSingleParams {
  id: IEventId;
}

export interface IEventUpdateRequest {
  title: IEventTitle;
  description: IEventDescription;
  location: IEventLocation;
  startAt: IEventStartAt;
  endAt: IEventEndAt;
  participantList: IEventParticipantList;
}

export interface IEventUpdateParams {
  id: IEventId;
}

export interface IEventDeleteParams {
  id: IEventId;
}
