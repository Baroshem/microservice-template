import { ItemUpdatedEvent } from './item-updated.event';

describe('ItemUpdatedEvent', () => {
  it('should create a ItemUpdatedEvent instance', () => {
    const event = new ItemUpdatedEvent({ id: 1, name: 'Test' });
    expect(event.updateItemDto.name).toBe('Test');
    expect(event.updateItemDto.id).toBe(1);
    expect(event instanceof ItemUpdatedEvent).toBe(true);
  });
});
