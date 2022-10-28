import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "@shared/errors";
import { routes } from "@shared/infra/http/routes";

const app = express();

import "@shared/container";

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running!"));
