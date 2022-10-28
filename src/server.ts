import "reflect-metadata";
import express, { json, Request, Response } from "express";
import { routes } from "@shared/routes";
import { AppError } from "@shared/errors";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.errorMessage,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running!"));
