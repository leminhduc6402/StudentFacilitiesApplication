import { httpStatusCodes } from '../httpStatusCodes';

export default class ForbiddenError extends Error {
  constructor(message) {
    super();
    this.statusCode = httpStatusCodes.FORBIDDEN;
    this.messageObject = message;
  }
}
