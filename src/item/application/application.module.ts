import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemReadRepository, ItemRepository, ItemWriteRepository } from '../repositories';
import { CommandHandlers } from './commands/handlers';

@Module({
    imports: [
        TypeOrmModule.forFeature([ItemReadRepository, ItemWriteRepository]),
        CqrsModule,
    ],
    providers: [
        ...CommandHandlers,
        ItemRepository,
    ]
})
export class ApplicationModule {}
