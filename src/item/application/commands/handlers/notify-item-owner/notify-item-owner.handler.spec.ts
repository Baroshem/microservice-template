import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

import { ItemEntity } from '@infrastructure/entities';
import { ItemRepository } from '@domain/repositories';
import { NotifyItemOwnerHandler } from './notify-item-owner.handler';

const mockedItem = new ItemEntity(1, 'Test');

describe('NotifyItemOwnerHandler', () => {
  let handler: NotifyItemOwnerHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [NotifyItemOwnerHandler, ItemRepository],
    }).compile();

    handler = module.get<NotifyItemOwnerHandler>(NotifyItemOwnerHandler);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });
});
