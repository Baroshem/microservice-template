import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemEntity } from './entities';
import { ItemReadRepository, ItemWriteRepository } from './repositories';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ItemReadRepository,
      ItemWriteRepository,
      ItemEntity,
    ]),
  ],
})
export class InfrastructureModule {}
