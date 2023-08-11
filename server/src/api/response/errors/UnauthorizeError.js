import { httpStatusCodes } from '../httpStatusCodes';

export default class UnauthorizeError extends Error {
  constructor(message) {
    super();
    (this.statusCode = httpStatusCodes.UNAUTHORIZED),
      (this.messageObject = message);
  }
}
