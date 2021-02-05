import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';

import { ItemEntity } from '@infrastructure/entities';
import { ItemService } from './item.service';

const mockedItem = new ItemEntity(1, 'Test');
const mockedItems = [
  new ItemEntity(1, 'Test'),
  new ItemEntity(2, 'Test1'),
  new ItemEntity(3, 'Test2'),
];

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
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

    service = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('ItemService.getItemById', () => {
    it('should return an item by its ID', async () => {
      const item = await service.getItemById(1);

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemService.getItems', () => {
    it('should return an array of items', async () => {
      const items = await service.getItems({ limit: 3, order: 'ASC' });

      expect(typeof items).toBe('object');
      expect(items[0].id).toBe(1);
      expect(items[1].name).toBe('Test1');
      items.map((item) => expect(item instanceof ItemEntity).toBe(true));
      expect(items.length).toBe(3);
    });
  });

  describe('ItemService.createItem', () => {
    it('should create a new item', async () => {
      const item = await service.createItem({ name: 'Test' });

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemService.updateItem', () => {
    it('should update existing item', async () => {
      const item = await service.updateItem({ id: 1, name: 'New Test' });

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });

  describe('ItemService.deleteItemById', () => {
    it('should delete item by its ID', async () => {
      const item = await service.deleteItemById(1);

      expect(typeof item).toBe('object');
      expect(item.id).toBe(1);
      expect(item.name).toBe('Test');
      expect(item instanceof ItemEntity).toBe(true);
    });
  });
});
