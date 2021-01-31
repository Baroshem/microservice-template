import {
  EventStoreModuleOptions,
  EventStoreOptionsFactory,
} from '@juicycleff/nestjs-event-store';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventStoreConfigService implements EventStoreOptionsFactory {
  createEventStoreOptions():
    | EventStoreModuleOptions
    | Promise<EventStoreModuleOptions> {
    return {
      type: 'event-store',
      tcpEndpoint: {
        host: process.env.EVENT_STORE_HOSTNAME,
        port: parseInt(process.env.EVENT_STORE_TCP_PORT),
      },
      options: {
        maxRetries: 1000, // Optional
        maxReconnections: 1000, // Optional
        reconnectionDelay: 1000, // Optional
        heartbeatInterval: 1000, // Optional
        heartbeatTimeout: 1000, // Optional
        defaultUserCredentials: {
          password: process.env.EVENT_STORE_CREDENTIALS_PASSWORD,
          username: process.env.EVENT_STORE_CREDENTIALS_USERNAME,
        },
      },
    };
  }
}
