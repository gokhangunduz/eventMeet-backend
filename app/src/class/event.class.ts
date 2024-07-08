import {
  getCurrentUnixTimeStamp,
  generateId,
} from "../helper/generator.helper";
import {
  IEventAcceptedList,
  IEventComments,
  IEventCreatedAt,
  IEventCreatorId,
  IEventDecllinedList,
  IEventDescription,
  IEventEndAt,
  IEventId,
  IEventLocation,
  IEventParticipantList,
  IEventRequesterList,
  IEventStartAt,
  IEventTitle,
  IEventUpdatedAt,
} from "../interface/event.interface";

interface EventParams {
  id?: IEventId;
  creatorId: IEventCreatorId;
  createdAt?: IEventCreatedAt;
  updatedAt?: IEventUpdatedAt;
  title: IEventTitle;
  description: IEventDescription;
  location: IEventLocation;
  startAt: IEventStartAt;
  endAt: IEventEndAt;
  participantList?: IEventParticipantList;
  requesterList?: IEventRequesterList;
  acceptedList?: IEventAcceptedList;
  decllinedList?: IEventDecllinedList;
  comments?: IEventComments;
}

export default class Event {
  public id: IEventId;
  public creatorId: IEventCreatorId;
  public createdAt: IEventCreatedAt;
  public updatedAt?: IEventUpdatedAt;
  public title: IEventTitle;
  public description: IEventDescription;
  public location: IEventLocation;
  public startAt: IEventStartAt;
  public endAt: IEventEndAt;
  public participantList: IEventParticipantList;
  public requesterList: IEventRequesterList;
  public acceptedList: IEventAcceptedList;
  public decllinedList: IEventDecllinedList;
  public comments: IEventComments;

  constructor({
    id = generateId(),
    creatorId,
    createdAt = getCurrentUnixTimeStamp(),
    updatedAt = undefined,
    title,
    description,
    location,
    startAt,
    endAt,
    participantList = [],
    requesterList = [],
    acceptedList = [],
    decllinedList = [],
    comments = [],
  }: EventParams) {
    this.id = id;
    this.creatorId = creatorId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.description = description;
    this.location = location;
    this.startAt = startAt;
    this.endAt = endAt;
    this.participantList = participantList;
    this.requesterList = requesterList;
    this.acceptedList = acceptedList;
    this.decllinedList = decllinedList;
    this.comments = comments;
  }
}
