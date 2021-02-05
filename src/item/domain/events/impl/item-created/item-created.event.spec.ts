import { ItemCreatedEvent } from './item-created.event';

describe('ItemCreatedEvent', () => {
  it('should create a ItemCreatedEvent instance', () => {
    const event = new ItemCreatedEvent({ name: 'Test' });
    expect(event.createItemDto.name).toBe('Test');
    expect(event instanceof ItemCreatedEvent).toBe(true);
  });
});
