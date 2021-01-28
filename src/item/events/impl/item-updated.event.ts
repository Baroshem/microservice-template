import { UpdateItemDto } from '../../dtos';

export class ItemUpdatedEvent {
  constructor(public readonly updateItemDto: UpdateItemDto) {}
}
