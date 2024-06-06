import { IUserId } from "./user.interface";

export type IEventId = string;
export type IEventCreatorId = IUserId;
export type IEventCreatedAt = number;
export type IEventUpdatedAt = number | null;
export type IEventTitle = string;
export type IEventDescription = string;
export type IEventLocation = string;
export type IEventStartAt = number;
export type IEventEndAt = number;
export type IEventParticipantList = IUserId[];
export type IEventRequesterList = IUserId[];
export type IEventAcceptedList = IUserId[];
export type IEventDecllinedList = IUserId[];

export interface IEventCreateRequest {
  title: IEventTitle;
  description: IEventDescription;
  location: IEventLocation;
  startAt: IEventStartAt;
  endAt: IEventEndAt;
  participantList: IEventParticipantList;
}
