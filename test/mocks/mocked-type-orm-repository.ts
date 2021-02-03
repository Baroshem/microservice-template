import { CreateItemDto } from '@application/dtos';

export const mockedTypeOrmRepository = {
  findOne(id: number) {
    return { id, name: 'Find' };
  },

  create(createItemDto: CreateItemDto) {
    return { id: 1, name: createItemDto.name };
  },

  save() {
    return;
  },

  delete(id: number) {
    return { id, name: 'Delete' };
  },
};
