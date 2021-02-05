import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';

import { ItemService } from '@application/services';
import { ItemEntity } from '@infrastructure/entities';
import { ItemController } from './item.controller';

const mockedItem = new ItemEntity(1, 'Test');
const mockedItems = [
  new ItemEntity(1, 'Test'),
  new ItemEntity(2, 'Test1'),
  new ItemEntity(3, 'Test2'),
];

describe('ItemController', () => {
  let controller: ItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [ItemController],
      providers: [
        {
          provide: ItemService,
          useValue: {
            getItemById: jest.fn().mockResolvedValue(mockedItem),
            getItems: jest.fn().mockResolvedValue(mockedItems),
            createItem: jest.fn().mockResolvedValue(mockedItem),
            updateItem: jest.fn().mockResolvedValue(mockedItem),
            deleteItemById: jest.fn().mockResolvedValue(mockedItem),
          },
        },
      ],
    }).compile();

    controller = module.get<ItemController>(ItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('ItemController.getItemById', () => {
    it('should return an item by its ID', async () => {
      const item = await controller.getItemById(1);

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemController.getItems', () => {
    it('should return an array of items', async () => {
      const items = await controller.getItems({ limit: 3, order: 'ASC' });

      expect(typeof items).toBe('object');
      expect(items[0].id).toBe(1);
      expect(items[1].name).toBe('Test1');
      items.map((item) => expect(item instanceof ItemEntity).toBe(true));
      expect(items.length).toBe(3);
    });
  });

  describe('ItemController.createItem', () => {
    it('should create a new item', async () => {
      const item = await controller.createItem({ name: 'Test' });

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemController.updateItem', () => {
    it('should update existing item', async () => {
      const item = await controller.updateItem({ id: 1, name: 'New Test' });

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemController.deleteItemById', () => {
    it('should delete item by its ID', async () => {
      const item = await controller.deleteItemById(1);

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });
});
