import { httpStatusCodes } from '../httpStatusCodes';

export default class NotFoundError extends Error {
  constructor(message) {
    super();
    this.statusCode = httpStatusCodes.NOT_FOUND;
    this.messageObject = message;
  }
}
