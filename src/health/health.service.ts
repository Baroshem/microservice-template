import { Injectable } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class HealthService {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly typeOrmHealthIndicator: TypeOrmHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private readonly memoryHealthIndicator: MemoryHealthIndicator,
  ) {}

  @Cron(CronExpression.EVERY_30_MINUTES)
  checkMicroserviceTypeorm() {
    return this.healthCheckService.check([
      () =>
        this.typeOrmHealthIndicator.pingCheck('microservice', {
          timeout: 1000,
        }),
    ]);
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  checkDisk() {
    return this.healthCheckService.check([
      () =>
        this.diskHealthIndicator.checkStorage('microservice', {
          thresholdPercent: 0.9,
          path: '/',
        }),
    ]);
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  checkMemory() {
    return this.healthCheckService.check([
      () =>
        this.memoryHealthIndicator.checkHeap('memory_heap', 150 * 1024 * 1024),
      () =>
        this.memoryHealthIndicator.checkRSS('memory_rss', 150 * 1024 * 1024),
    ]);
  }
}
