import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@infrastructure/entities';
import { ItemWriteRepository } from '@infrastructure/repositories';
import { ItemRepository } from '@domain/repositories';
import { DeleteItemByIdHandler } from './delete-item-by-id.handler';
import { mockedTypeOrmRepository } from '@test/mocks';

const mockedItem = new ItemEntity(1, 'Test');

describe('DeleteItemByIdHandler', () => {
  let handler: DeleteItemByIdHandler;
  let repo: Repository<ItemEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        DeleteItemByIdHandler,
        ItemRepository,
        {
          provide: getRepositoryToken(ItemWriteRepository),
          useValue: mockedTypeOrmRepository,
        },
      ],
    }).compile();

    handler = module.get<DeleteItemByIdHandler>(DeleteItemByIdHandler);
    repo = module.get<Repository<ItemEntity>>(
      getRepositoryToken(ItemWriteRepository),
    );
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  it('should call repo to find and delete item', async () => {
    const item = await handler.execute({ id: 1 });
    const repoFindOneSpy = jest.spyOn(repo, 'findOne');
    const repoDeleteSpy = jest.spyOn(repo, 'delete');

    expect(repoFindOneSpy).toBeCalled();
    expect(repoFindOneSpy).toBeCalledWith(1);

    expect(repoDeleteSpy).toBeCalled();

    expect(item instanceof ItemEntity).toBe(true);
    expect(item).toEqual(mockedItem);
  });
});
