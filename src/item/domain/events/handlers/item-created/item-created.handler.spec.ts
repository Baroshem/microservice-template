import { Test } from '@nestjs/testing';

import { ItemCreatedHandler } from './item-created.handler';

describe('ItemCreatedHandler', () => {
  let handler: ItemCreatedHandler;

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      providers: [ItemCreatedHandler],
    }).compile();
    handler = mod.get(ItemCreatedHandler);
  });

  describe('handle', () => {
    it('should print "Handled ItemCreatedEvent with name: Test"', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      handler.handle({ createItemDto: { name: 'Test' } });
      expect(consoleSpy).toBeCalledTimes(1);
      expect(consoleSpy).toBeCalledWith('Handled ItemCreatedEvent with name: Test');
    });
  });
});
