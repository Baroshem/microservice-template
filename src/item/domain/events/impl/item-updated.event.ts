import { IEvent } from '@nestjs/cqrs';

import { UpdateItemDto } from '../../../dtos';

export class ItemUpdatedEvent implements IEvent {
  constructor(public readonly updateItemDto: UpdateItemDto) {}
}
