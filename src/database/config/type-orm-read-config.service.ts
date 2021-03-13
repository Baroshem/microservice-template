import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class TypeOrmReadConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST_READ,
      port: parseInt(process.env.POSTGRES_PORT_READ),
      username: process.env.POSTGRES_USERNAME_READ,
      password: process.env.POSTGRES_PASSWORD_READ,
      database: process.env.POSTGRES_DATABASE_READ,
      synchronize: true,
      autoLoadEntities: true,
      entities: [join(__dirname, '**', '*-read.entity.ts')]
    };
  }
}
