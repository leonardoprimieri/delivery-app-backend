export class AppError {
  constructor(readonly errorMessage?: string, readonly statusCode: number = 400) {}
}
