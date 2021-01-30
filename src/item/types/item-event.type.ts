import { ItemCreatedEvent, ItemDeletedEvent, ItemUpdatedEvent } from "../events/impl";

export type ItemEventType = ItemCreatedEvent | ItemUpdatedEvent | ItemDeletedEvent
