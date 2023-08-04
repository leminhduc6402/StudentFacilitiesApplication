export default class ValidateError extends Error {
  constructor(message) {
    super();
    this.statusCode = 422;
    this.messageObject = message;
  }
}
