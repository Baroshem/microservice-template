import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import { microserviceOptions } from './utils/microservice-connection';

const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  await app.listen(() => {
    logger.log('Microservice is listening');
  });
}
bootstrap();