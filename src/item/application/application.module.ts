import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ItemReadRepository,
  ItemWriteRepository,
} from '../infrastructure/repositories';
import { CommandHandlers } from './commands/handlers';
import { ItemController } from './controllers';
import { QueryHandlers } from './queries/handlers';
import { ItemService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemReadRepository, ItemWriteRepository]),
    CqrsModule,
  ],
  controllers: [ItemController],
  providers: [...CommandHandlers, ...QueryHandlers, ItemService],
})
export class ApplicationModule {}
