import { ItemCreatedEvent } from '../item-created';
import { ItemDeletedEvent } from '../item-deleted';
import { ItemUpdatedEvent } from '../item-updated';
import { ItemOwnerNotifiedEvent } from './item-owner-notified.event';

describe('ItemOwnerNotifiedEvent', () => {
  it('should create a ItemOwnerNotifiedEvent instance', () => {
    const event = new ItemOwnerNotifiedEvent(
      new ItemCreatedEvent({ name: 'Test' }),
    );
    expect(event.event).toEqual({ createItemDto: { name: 'Test' } });
    expect(event instanceof ItemOwnerNotifiedEvent).toBe(true);
  });

  it('should create a ItemOwnerNotifiedEvent instance', () => {
    const event = new ItemOwnerNotifiedEvent(new ItemDeletedEvent(1));
    expect(event.event).toEqual({ itemId: 1 });
    expect(event instanceof ItemOwnerNotifiedEvent).toBe(true);
  });

  it('should create a ItemOwnerNotifiedEvent instance', () => {
    const event = new ItemOwnerNotifiedEvent(
      new ItemUpdatedEvent({ id: 1, name: 'New test' }),
    );
    expect(event.event).toEqual({ updateItemDto: { id: 1, name: 'New test' } });
    expect(event instanceof ItemOwnerNotifiedEvent).toBe(true);
  });
});
