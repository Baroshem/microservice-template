import { Injectable } from '@nestjs/common';

import { DbErrorCodes } from './db-error-codes.enum';
import { IErrorObject } from './error-object.interface';

@Injectable()
export class ErrorValidationService {
  /**
   * A method that returns a correct HTTP exception object based on the database error code provided as a parameter
   *
   * @param {string} errorCode
   * @return {*}  {IErrorObject}
   */
  validateDbError(errorCode: string): IErrorObject {
    switch (errorCode) {
      case DbErrorCodes.UniqueViolation:
        return { code: 409, message: 'Duplicated entry' };
      default:
        return { code: 400, message: 'Bad Request' };
    }
  }
}
