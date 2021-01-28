import { Injectable } from '@nestjs/common';

import { CreateItemDto, UpdateItemDto } from '../dtos';
import { Item } from '../models';

@Injectable()
export class ItemRepository {
  deleteItem(id: number): Item {
    const item = new Item(id);

    item.deleteItem();

    return item;
  }

  createItem(createItemDto: CreateItemDto): Item {
    const item = new Item();

    item.createItem(createItemDto);

    return item;
  }

  updateItem(updateItemDto: UpdateItemDto): Item {
    const item = new Item();

    item.updateItem(updateItemDto);

    return item;
  }
}
