import { EventStoreModule } from '@juicycleff/nestjs-event-store';
import { Global, Module } from '@nestjs/common';

import { EventStoreConfigService } from './config';

@Global()
@Module({
  imports: [
    EventStoreModule.registerAsync({
      type: 'event-store',
      useClass: EventStoreConfigService,
    }),
  ],
})
export class EventStoreWrapperModule {}
