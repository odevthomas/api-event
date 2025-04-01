import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  hour: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);
