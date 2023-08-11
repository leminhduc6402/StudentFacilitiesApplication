import { httpStatusCodes } from '../httpStatusCodes';

export default class ValidateError extends Error {
  constructor(message) {
    super();
    this.statusCode = httpStatusCodes.UNPROCESSABLE_ENTITY;
    this.messageObject = message;
  }
}
