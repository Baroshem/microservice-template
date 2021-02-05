import { ItemEntity } from "@infrastructure/entities";

const mockedItem = new ItemEntity(1, 'Test');
const mockedItems = [
  new ItemEntity(1, 'Test'),
  new ItemEntity(2, 'Test1'),
  new ItemEntity(3, 'Test2'),
];

export const mockedTypeOrmRepository = {
  create: jest.fn().mockResolvedValue(mockedItem),
  save: jest.fn().mockResolvedValue(mockedItem),
  findOne: jest.fn().mockResolvedValue(mockedItem),
  delete: jest.fn().mockResolvedValue(true),
  update: jest.fn().mockResolvedValue(true),
  find: jest.fn().mockResolvedValue(mockedItems),
};
