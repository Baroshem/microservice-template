import { Test } from '@nestjs/testing';

import { ItemCreatedEvent, ItemDeletedEvent, ItemUpdatedEvent } from '@domain/events/impl';
import { ItemOwnerNotifiedHandler } from './item-owner-notified.handler';

describe('ItemOwnerNotifiedHandler', () => {
  let handler: ItemOwnerNotifiedHandler;

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      providers: [ItemOwnerNotifiedHandler],
    }).compile();
    handler = mod.get(ItemOwnerNotifiedHandler);
  });

  describe('handle', () => {
    it('should print "Handled ItemOwnerNotifiedEvent with data {\"event\":{\"createItemDto\":{\"name\":\"Test\"}}}"', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      handler.handle({ event: new ItemCreatedEvent({ name: 'Test' })});
      expect(consoleSpy).toBeCalledTimes(1);
      expect(consoleSpy).toBeCalledWith('Handled ItemOwnerNotifiedEvent with data {\"event\":{\"createItemDto\":{\"name\":\"Test\"}}}');
    });

    it('should print "Handled ItemOwnerNotifiedEvent with data {\"event\":{\"itemId\":1}}"', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        handler.handle({ event: new ItemDeletedEvent(1)});
        expect(consoleSpy).toBeCalledTimes(2);
        expect(consoleSpy).toBeCalledWith('Handled ItemOwnerNotifiedEvent with data {\"event\":{\"itemId\":1}}');
    });

    it('should print "Handled ItemOwnerNotifiedEvent with data {\"event\":{\"updateItemDto\":{\"id\":1,\"name\":\"Test\"}}}"', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        handler.handle({ event: new ItemUpdatedEvent({ id: 1, name: 'Test' })});
        expect(consoleSpy).toBeCalledTimes(3);
        expect(consoleSpy).toBeCalledWith('Handled ItemOwnerNotifiedEvent with data {\"event\":{\"updateItemDto\":{\"id\":1,\"name\":\"Test\"}}}');
    });
  });
});
