import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@infrastructure/entities';
import { ItemWriteRepository } from '@infrastructure/repositories';
import { ItemRepository } from '@domain/repositories';
import { CreateItemHandler } from './create-item.handler';
import { mockedTypeOrmRepository } from '@test/mocks';

const mockedItem = new ItemEntity(1, 'Test');

describe('CreateItemHandler', () => {
  let handler: CreateItemHandler;
  let repo: Repository<ItemEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateItemHandler,
        ItemRepository,
        {
          provide: getRepositoryToken(ItemWriteRepository),
          useValue: mockedTypeOrmRepository,
        },
      ],
    }).compile();

    handler = module.get<CreateItemHandler>(CreateItemHandler);
    repo = module.get<Repository<ItemEntity>>(
      getRepositoryToken(ItemWriteRepository),
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should call repo to create new item', async () => {
    const item = await handler.execute({ createItemDto: { name: 'Test' } });
    const repoCreateSpy = jest.spyOn(repo, 'create');
    const repoSaveSpy = jest.spyOn(repo, 'save');

    expect(repoCreateSpy).toBeCalled();
    expect(repoCreateSpy).toBeCalledWith();

    expect(repoSaveSpy).toBeCalled();

    expect(item instanceof ItemEntity).toBe(true);
    expect(item).toEqual(mockedItem);
  });
});
