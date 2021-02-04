import { Test } from '@nestjs/testing';

import { ItemUpdatedHandler } from './item-updated.handler';

describe('ItemUpdatedHandler', () => {
  let handler: ItemUpdatedHandler;

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      providers: [ItemUpdatedHandler],
    }).compile();
    handler = mod.get(ItemUpdatedHandler);
  });

  describe('handle', () => {
    it('should print "Handled ItemUpdatedEvent with ID: 1 and name: Test"', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      handler.handle({ updateItemDto: { id: 1, name: 'Test' } });
      expect(consoleSpy).toBeCalledTimes(1);
      expect(consoleSpy).toBeCalledWith(
        'Handled ItemUpdatedEvent with ID: 1 and name: Test',
      );
    });
  });
});
