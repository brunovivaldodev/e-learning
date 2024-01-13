import { config } from "../../config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { DatabaseStudent } from "../../database";
import AppError from "../../errors/appError";

interface IVerifyOptions {
  sub: string;
}

export async function ensureStudentAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 403);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: student_id } = verify(
      token,
      config.secret_token
    ) as IVerifyOptions;
    const studentDatabase = new DatabaseStudent();

    const student = await studentDatabase.findByID(student_id);

    if (!student) {
      throw new AppError("Student does not exists", 404);
    }

    request.user = {
      id: student.id,
      name: student.name,
      avatarUrl: student.avatarUrl,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid token", 400);
  }
}
