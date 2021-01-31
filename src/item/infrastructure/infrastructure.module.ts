import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemReadRepository, ItemWriteRepository } from './repositories';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([ItemReadRepository, ItemWriteRepository]),
    ]
})
export class InfrastructureModule {}
