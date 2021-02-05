import { Test } from '@nestjs/testing';

import { ItemDeletedHandler } from './item-deleted.handler';

describe('ItemDeletedHandler', () => {
  let handler: ItemDeletedHandler;

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      providers: [ItemDeletedHandler],
    }).compile();
    handler = mod.get(ItemDeletedHandler);
  });

  describe('handle', () => {
    it('should print "Handled ItemDeletedEvent with ID: 1"', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      handler.handle({ itemId: 1 });
      expect(consoleSpy).toBeCalledTimes(1);
      expect(consoleSpy).toBeCalledWith('Handled ItemDeletedEvent with ID: 1');
    });
  });
});
