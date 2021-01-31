import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TerminusModule } from '@nestjs/terminus';

import { HealthService } from './services';

@Module({
  imports: [TerminusModule, ScheduleModule.forRoot()],
  providers: [HealthService],
})
export class HealthModule {}
