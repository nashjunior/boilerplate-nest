import { HttpException, HttpStatus } from '@nestjs/common';

class AppError extends HttpException {
  constructor(message: unknown, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}

export default AppError;
