import { DbErrorCodes } from './enums';
import { IErrorObject } from './interfaces';

  /**	
   * A method that returns a correct HTTP exception object based on the database error code provided as a parameter	
   *	
   * @param {string} errorCode	
   * @return {*}  {IErrorObject}	
   */
export const validateDbError = (errorCode: string): IErrorObject => {
  switch (errorCode) {
    case DbErrorCodes.UniqueViolation:
      return { code: 409, message: 'Duplicated entry' };
    default:
      return { code: 400, message: 'Bad Request' };
  }
};
