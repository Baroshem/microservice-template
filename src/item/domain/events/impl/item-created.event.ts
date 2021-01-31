import { IEvent } from '@nestjs/cqrs';

import { CreateItemDto } from '../../../application/dtos';

export class ItemCreatedEvent implements IEvent {
  constructor(public readonly createItemDto: CreateItemDto) {}
}
