import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventService } from './Services/create-event.services';
import { IEventEntity } from './interfaces/iEventEntity';

@Controller('event')
export class EventController {
  constructor(
    private readonly createeventService: CreateEventService,
  ) { }
  
  @Post('create')
  async createEvent(@Body() event: IEventEntity): Promise<IEventEntity> {
  return this.createeventService.execute(event);
}

}
