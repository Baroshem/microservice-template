import { EntityRepository, Repository } from 'typeorm';

import { ItemEntity } from '../entity';
import { Item } from '../models';

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {
    async deleteItem(id: number) {
        const item = new Item(id);

        item.deleteItem(id)

        return item;
    }
}
