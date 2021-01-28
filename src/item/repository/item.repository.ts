import { Injectable } from '@nestjs/common';

import { Item } from '../models';

@Injectable()
export class ItemRepository {
  deleteItem(id: number) {
    const item = new Item(id);

    item.deleteItem();

    return item;
  }
}
