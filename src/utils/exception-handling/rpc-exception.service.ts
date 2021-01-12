import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { IErrorObject } from '../error-validation';

@Injectable()
export class RpcExceptionService {
  /**
   * Method that throws an RpcException with 404 status code and custom message or 'Not Found'
   *
   * @param {string} [customErrorMessage]
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwNotFound(customErrorMessage?: string): RpcException {
    throw new RpcException({
      statusCode: 404,
      errorStatus: customErrorMessage || 'Not Found',
    });
  }

  /**
   * Method that throws an RpcException with 400 status code and custom message or 'Bad Request'
   *
   * @param {string} [customErrorMessage]
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwBadRequest(customErrorMessage?: string): RpcException {
    throw new RpcException({
      statusCode: 400,
      errorStatus: customErrorMessage || 'Bad Request',
    });
  }

  /**
   * Method that throws an RpcException with 403 status code and custom message or 'Forbidden'
   *
   * @param {string} [customErrorMessage]
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwForbidden(customErrorMessage?: string): RpcException {
    throw new RpcException({
      statusCode: 403,
      errorStatus: customErrorMessage || 'Forbidden',
    });
  }

  /**
   * Method that throws an RpcException with 401 status code and custom message or 'Unauthorised'
   *
   * @param {string} [customErrorMessage]
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwUnauthorised(customErrorMessage?: string): RpcException {
    throw new RpcException({
      statusCode: 401,
      errorStatus: customErrorMessage || 'Unauthorised',
    });
  }

  /**
   * Method that throws an RpcException with 409 status code and custom message or 'Conflict'
   *
   * @param {string} [customErrorMessage]
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwConflict(customErrorMessage?: string): RpcException {
    throw new RpcException({
      statusCode: 409,
      errorStatus: customErrorMessage || 'Conflict',
    });
  }

  /**
   * Method that throws an RpcException with catched status code and  message
   *
   * @param {IErrorObject} error
   * @return {*}  {RpcException}
   * @memberof RpcExceptionService
   */
  throwCatchedException(error: IErrorObject): RpcException {
    throw new RpcException({
      statusCode: error.code,
      errorStatus: error.message,
    });
  }
}
