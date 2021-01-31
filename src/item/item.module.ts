import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, ApplicationModule, DomainModule, InfrastructureModule],
})
export class ItemModule {}
