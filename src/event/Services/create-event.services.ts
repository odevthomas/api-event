import { Injectable } from '@nestjs/common';
import { IEventEntity } from '../interfaces/iEventEntity';
import { CreateEventRepository } from '../repositories/createEvent.repository';
import { Event } from '../Schema/event.schema'; 

@Injectable()
export class CreateEventService {
  constructor(
    private readonly createEventRepository: CreateEventRepository,
  ) {}

  async execute(event: IEventEntity): Promise<Event> {
    const newEvent = await this.createEventRepository.execute(event);
    return newEvent;
  }
}
