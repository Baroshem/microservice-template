import { AggregateRoot } from '@nestjs/cqrs';
import { CreateItemDto } from '../dtos';

import { ItemCreatedEvent, ItemDeletedEvent } from '../events/impl';

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
}
