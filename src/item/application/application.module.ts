import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemReadRepository, ItemWriteRepository } from '../infrastructure/repositories';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
    imports: [
        TypeOrmModule.forFeature([ItemReadRepository, ItemWriteRepository]),
        CqrsModule,
    ],
    providers: [
        ...CommandHandlers,
        ...QueryHandlers,
    ],
})
export class ApplicationModule {}
