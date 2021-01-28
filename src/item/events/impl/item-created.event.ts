import { CreateItemDto } from '../../dtos';

export class ItemCreatedEvent {
  constructor(public readonly createItemDto: CreateItemDto) {}
}
