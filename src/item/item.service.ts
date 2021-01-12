import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ItemEntity } from 'src/db/entities';
import { GetItemByIdQuery } from './queries/impl';

@Injectable()
export class ItemService {
    constructor(
        private readonly queryBus: QueryBus,
    ) {}

    async getItemById(id: number): Promise<ItemEntity> {
        return this.queryBus.execute(new GetItemByIdQuery(id));
    }
}
