import { IEvent } from '@nestjs/cqrs';

import { UpdateItemDto } from '../../../application/dtos';

export class ItemUpdatedEvent implements IEvent {
  constructor(public readonly updateItemDto: UpdateItemDto) {}
}
