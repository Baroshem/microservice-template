import { ItemDeletedEvent } from './item-deleted.event';

describe('ItemDeletedEvent', () => {
  it('should create a ItemDeletedEvent instance', () => {
    const event = new ItemDeletedEvent(1);
    expect(event.itemId).toBe(1);
    expect(event instanceof ItemDeletedEvent).toBe(true);
  });
});
