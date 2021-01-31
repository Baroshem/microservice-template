import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigService } from './config';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })],
})
export class DatabaseModule {}
