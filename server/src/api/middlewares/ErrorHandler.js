import { httpStatusCodes } from '../response/httpStatusCodes';

export const errorHandler = (err, req, res, next) => {
  console.log('--------------------------------------------------------');
  console.log('ERROR LOG ', new Date().toLocaleString());
  console.log('Request:', req.method, req.originalUrl);
  console.log('Body:', req.body);
  console.log('Error: ', err);
  console.log('--------------------------------------------------------');

  const messageError =
    err.messageObject || err.message || 'Server not response =)))';
  const statusCode = err.statusCode || httpStatusCodes.INTERNAL_SERVER_ERROR;
  const error = {
    status: statusCode,
    message: messageError,
    request: `${req.method} ${req.originalUrl}`,
  };

  return res.status(statusCode).json(error);
};
