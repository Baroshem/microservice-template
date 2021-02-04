import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@infrastructure/entities';
import { ItemWriteRepository } from '@infrastructure/repositories';
import { ItemRepository } from '@domain/repositories';
import { UpdateItemHandler } from './update-item.handler';

const mockedItem = new ItemEntity(1, 'Test');

describe('UpdateItemHandler', () => {
  let handler: UpdateItemHandler;
  let repo: Repository<ItemEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        UpdateItemHandler,
        ItemRepository,
        {
          provide: getRepositoryToken(ItemWriteRepository),
          useValue: {
            findOne: jest.fn().mockResolvedValue(mockedItem),
            update: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    handler = module.get<UpdateItemHandler>(UpdateItemHandler);
    repo = module.get<Repository<ItemEntity>>(
      getRepositoryToken(ItemWriteRepository),
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should call repo to find and delete item', async () => {
    const item = await handler.execute({
      updateItemDto: { id: 1, name: 'Test1' },
    });
    const repoFindOneSpy = jest.spyOn(repo, 'findOne');
    const repoUpdateSpy = jest.spyOn(repo, 'update');

    expect(repoFindOneSpy).toBeCalled();
    expect(repoFindOneSpy).toBeCalledWith(1);

    expect(repoUpdateSpy).toBeCalled();

    expect(item instanceof ItemEntity).toBe(true);
    expect(item).toEqual(mockedItem);
  });
});
