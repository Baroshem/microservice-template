import { DbErrorCodes } from './enums';
import { IErrorObject } from './interfaces';

export const validateDbError = (errorCode: string): IErrorObject => {
  switch (errorCode) {
    case DbErrorCodes.UniqueViolation:
      return { code: 409, message: 'Duplicated entry' };
    default:
      return { code: 400, message: 'Bad Request' };
  }
};
