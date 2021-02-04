import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@infrastructure/entities';
import { ItemReadRepository } from '@infrastructure/repositories';
import { GetItemByIdHandler } from './get-item-by-id.handler';

const mockedItem = new ItemEntity(1, 'Test');

describe('GetItemByIdHandler', () => {
  let handler: GetItemByIdHandler;
  let repo: Repository<ItemEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        GetItemByIdHandler,
        {
          provide: getRepositoryToken(ItemReadRepository),
          useValue: {
            findOne: jest.fn().mockResolvedValue(mockedItem),
          },
        },
      ],
    }).compile();

    handler = module.get<GetItemByIdHandler>(GetItemByIdHandler);
    repo = module.get<Repository<ItemEntity>>(
      getRepositoryToken(ItemReadRepository),
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should call repo to get item by id', async () => {
    const item = await handler.execute({ id: 1 });
    const repoSpy = jest.spyOn(repo, 'findOne');

    expect(repoSpy).toBeCalled();
    expect(repoSpy).toBeCalledWith(1);
    expect(item instanceof ItemEntity).toBe(true);
    expect(item).toEqual(mockedItem);
  });
});
