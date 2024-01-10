import { config } from "../../config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import {
  DatabaseAdmin,
  DatabaseInstructor,
  DatabaseStudent,
} from "../../database";
import AppError from "../../errors/appError";

interface IVerifyOptions {
  sub: string;
}

export async function ensureAdminAuthenticated(
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
    const { sub: admin_id } = verify(
      token,
      config.secret_token
    ) as IVerifyOptions;
    const adminDatabase = new DatabaseAdmin();

    const admin = await adminDatabase.findByID(admin_id);

    if (!admin) {
      throw new AppError("Admin does not exists", 404);
    }

    request.user = {
      id: admin.id,
      name: admin.name,
      avatarUrl: null,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid token", 400);
  }
}

export async function ensureInstructorAuthenticated(
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
    const { sub: instructor_id } = verify(
      token,
      config.secret_token
    ) as IVerifyOptions;
    const instructorDatabase = new DatabaseInstructor();

    const instructor = await instructorDatabase.findByID(instructor_id);

    if (!instructor) {
      throw new AppError("Instructor does not exists", 404);
    }

    request.user = {
      id: instructor.id,
      name: instructor.name,
      avatarUrl: instructor.avatarUrl,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid token", 400);
  }
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
