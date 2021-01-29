import { Injectable } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ItemCreatedEvent, ItemUpdatedEvent } from '../events/impl';

@Injectable()
export class ItemSagas {
  @Saga()
  itemCreated = (events$: Observable<any>) => {
    return (
      events$.pipe(ofType(ItemCreatedEvent)),
      delay(1000),
      map((event) => {
        console.log(`Inside itemCreated @Saga: ${event}`);
      })
    );
  };

  @Saga()
  itemUpdated = (events$: Observable<any>) => {
    return (
      events$.pipe(ofType(ItemUpdatedEvent)),
      delay(1000),
      map((event) => {
        console.log(`Inside itemUpdated @Saga: ${event}`);
      })
    );
  };
}
