import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemRepository } from './repositories';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { EventHandlers } from './events/handlers';
import { ItemController } from './controllers';
import { ItemService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository]), CqrsModule],
  controllers: [ItemController],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ItemService,
    ConfigService,
  ],
})
export class ItemModule {}
