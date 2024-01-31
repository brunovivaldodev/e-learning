import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import routes from "./routes";
import AppError from "./errors/appError";
import path from "path";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "uploads")));
app.use(routes);

app.use(
  (err: Error, resquest: Request, response: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal Error Server -${err.stack}`,
    });
  }
);

app.listen(3333, () => {
  console.log("App running at port 3333");
});
