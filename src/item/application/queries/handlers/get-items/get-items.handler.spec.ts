import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@infrastructure/entities';
import { ItemReadRepository } from '@infrastructure/repositories';
import { GetItemsHandler } from './get-items.handler';

const mockedItems = [
  new ItemEntity(1, 'Test'),
  new ItemEntity(2, 'Test1'),
  new ItemEntity(3, 'Test2'),
];

describe('GetItemByIdHandler', () => {
  let handler: GetItemsHandler;
  let repo: Repository<ItemEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        GetItemsHandler,
        {
          provide: getRepositoryToken(ItemReadRepository),
          useValue: {
            find: jest.fn().mockResolvedValue(mockedItems),
          },
        },
      ],
    }).compile();

    handler = module.get<GetItemsHandler>(GetItemsHandler);
    repo = module.get<Repository<ItemEntity>>(
      getRepositoryToken(ItemReadRepository),
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should call repo to get item by id', async () => {
    const items = await handler.execute({
      getItemsDto: { limit: 3, order: 'ASC' },
    });
    const repoSpy = jest.spyOn(repo, 'find');

    expect(repoSpy).toBeCalled();
    expect(repoSpy).toBeCalledWith({ take: 3 });

    expect(items instanceof Array).toBe(true);
    items.map((item) => expect(item instanceof ItemEntity).toBe(true));
    expect(items).toEqual(mockedItems);
  });
});
