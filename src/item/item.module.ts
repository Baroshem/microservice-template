import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ItemReadRepository,
  ItemWriteRepository,
  ItemRepository,
} from './repositories';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { EventHandlers } from './events/handlers';
import { ItemController } from './controllers';
import { ItemService } from './services';
import { ItemSagas } from './sagas';
import { ItemEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ItemReadRepository,
      ItemWriteRepository,
      ItemEntity,
    ]),
    CqrsModule,
  ],
  controllers: [ItemController],
  providers: [
    ConfigService,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ItemService,
    ItemSagas,
    ItemRepository,
  ],
})
export class ItemModule {}
