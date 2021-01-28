import { AggregateRoot } from '@nestjs/cqrs';

import { CreateItemDto, UpdateItemDto } from '../dtos';
import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemUpdatedEvent,
} from '../events/impl';

export class Item extends AggregateRoot {
  constructor(private readonly id?: number) {
    super();
  }

  deleteItem() {
    this.apply(new ItemDeletedEvent(this.id));
  }

  createItem(createItemDto: CreateItemDto) {
    this.apply(new ItemCreatedEvent(createItemDto));
  }

  updateItem(updateItemDto: UpdateItemDto) {
    this.apply(new ItemUpdatedEvent(updateItemDto));
  }
}
