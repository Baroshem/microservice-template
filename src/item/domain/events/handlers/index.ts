import { ItemCreatedHandler } from './item-created.handler';
import { ItemDeletedHandler } from './item-deleted.handler';
import { ItemOwnerNotifiedHandler } from './item-owner-notified.handler';
import { ItemUpdatedHandler } from './item-updated.handler';

export const EventHandlers = [
  ItemDeletedHandler,
  ItemCreatedHandler,
  ItemUpdatedHandler,
  ItemOwnerNotifiedHandler,
];
