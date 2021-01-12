import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ErrorValidationService } from './error-validation';
import { RpcExceptionService } from './exception-handling';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    RpcExceptionService,
    ErrorValidationService,
  ],
  exports: [RpcExceptionService, ErrorValidationService],
})
export class UtilsModule {}
