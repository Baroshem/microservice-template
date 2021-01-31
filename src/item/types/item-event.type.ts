import {
  ItemCreatedEvent,
  ItemDeletedEvent,
  ItemUpdatedEvent,
} from '../domain/events/impl';

export type ItemEventType =
  | ItemCreatedEvent
  | ItemUpdatedEvent
  | ItemDeletedEvent;
