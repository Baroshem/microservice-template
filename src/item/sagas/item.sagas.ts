import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { NotifyItemOwnerCommand } from '../commands/impl';
import {
  ItemCreatedEvent,
  ItemUpdatedEvent,
  ItemDeletedEvent,
} from '../events/impl';

@Injectable()
export class ItemSagas {
  @Saga()
  itemCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ItemCreatedEvent),
        delay(1000),
        map(event => {
          console.log(`Inside itemCreated @Saga: ${event}`)
          return new NotifyItemOwnerCommand(event);
        }),
      );
  }

  @Saga()
  itemUpdated = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ItemUpdatedEvent),
        delay(1000),
        map(event => {
          console.log(`Inside itemUpdated @Saga: ${event}`);
          return new NotifyItemOwnerCommand(event);
        }),
      );
  }

  @Saga()
  itemDeleted = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ItemDeletedEvent),
        delay(1000),
        map(event => {
          console.log(`Inside itemDeleted @Saga: ${event}`);
          return new NotifyItemOwnerCommand(event);
        }),
      );
  }
}
