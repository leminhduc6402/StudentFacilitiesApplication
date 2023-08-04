export default class NotFoundError extends Error {
  constructor(message) {
    super();
    this.statusCode = 404;
    this.messageObject = message;
  }
}
