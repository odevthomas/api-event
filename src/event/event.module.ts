import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepository } from './repositories/createEvent.repository';
import { CreateEventService } from './Services/create-event.services';
import { Event, EventSchema } from '../event/Schema/event.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]), 
  ],
  controllers: [EventController],
  providers: [CreateEventRepository, CreateEventService],
  exports: [CreateEventRepository, CreateEventService],
})
export class EventModule {}
