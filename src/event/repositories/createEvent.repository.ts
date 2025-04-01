import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from "./../Schema/event.schema";
import { IEventEntity } from "../interfaces/iEventEntity";

export class CreateEventRepository {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async execute(event: IEventEntity): Promise<Event> {
    const createEvent = new this.eventModel(event);
    await createEvent.save();
    return createEvent.toObject();
  }
}
