import { ItemCreatedHandler } from './item-created';
import { ItemDeletedHandler } from './item-deleted';
import { ItemOwnerNotifiedHandler } from './item-owner-notified';
import { ItemUpdatedHandler } from './item-updated';

export const EventHandlers = [
  ItemDeletedHandler,
  ItemCreatedHandler,
  ItemUpdatedHandler,
  ItemOwnerNotifiedHandler,
];
