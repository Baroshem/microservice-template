import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ItemEntity } from 'src/db/entities';
import { DeleteItemByIdCommand } from './commands/impl';
import { GetItemByIdQuery } from './queries/impl';

@Injectable()
export class ItemService {
    constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus,
    ) {}

    async getItemById(id: number): Promise<ItemEntity> {
        return this.queryBus.execute(new GetItemByIdQuery(id));
    }

    async deleteItemById(id: number): Promise<ItemEntity> {
        return this.commandBus.execute(new DeleteItemByIdCommand(id));
    }
}
