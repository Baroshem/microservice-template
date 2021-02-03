import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';

import { ItemService } from '@application/services';
import { ItemController } from './item.controller';


describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [ItemController],
      providers: [ItemService],
    }).compile();

    controller = module.get<ItemController>(ItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
