import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigService, TypeOrmReadConfigService } from './config';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }), TypeOrmModule.forRootAsync({ useClass: TypeOrmReadConfigService })],
})
export class DatabaseModule {}
