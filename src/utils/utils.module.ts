import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ErrorValidationService } from './error-validation';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [ErrorValidationService],
  exports: [ErrorValidationService],
})
export class UtilsModule {}
