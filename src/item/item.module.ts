import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemRepository } from './repository';
import { CommandHandlers } from './commands/handlers';
import { ItemController } from './controllers';
import { ItemService } from './item.service';
import { QueryHandlers } from './queries/handlers';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository]), CqrsModule],
  controllers: [ItemController],
  providers: [
    ItemService,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ConfigService,
  ],
})
export class ItemModule {}
