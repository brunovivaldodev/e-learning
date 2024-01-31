import { DatabaseInstructor, Decision } from "../database";
import AppError from "../errors/appError";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { config } from "../config/auth";
import {
  CreateInstructorDTO,
  EditInstructorDTO,
  LoginInstructorDTO,
} from "./dtos/instructors";

class InstructorControllers {
  readonly databaseInstructor = new DatabaseInstructor();

  async create({
    email,
    confirmationPassword,
    name,
    password,
    description,
    social_profiles,
    title,
  }: CreateInstructorDTO) {
    if (password != confirmationPassword) {
      return new AppError("Password Does Not Match", 400);
    }

    const instructorExists = await this.databaseInstructor.findByEmail(email);

    if (instructorExists) {
      return new AppError("Instructor Already Exists", 400);
    }

    const hashedPassword = await hash(password, 8);

    const instructor = await this.databaseInstructor.create({
      email,
      name,
      decision: Decision.Values.Pendente,
      social_profiles,
      title,
      password: hashedPassword,
      description,
    });

    const token = sign(
      {
        name: instructor.name,
        avatarUrl: instructor.avatarUrl,
      },
      config.secret_token,
      {
        subject: instructor.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async login({ email, password }: LoginInstructorDTO) {
    const instructorExists = await this.databaseInstructor.findByEmail(email);

    if (!instructorExists) {
      return new AppError("Email or Password Incorret", 400);
    }

    const passwordMatch = await compare(password, instructorExists.password);

    if (!passwordMatch) {
      return new AppError("Email or Password Incorret", 400);
    }

    const token = sign(
      {
        name: instructorExists.name,
        avatarUrl: instructorExists.avatarUrl,
      },
      config.secret_token,
      {
        subject: instructorExists.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async edit({
    instructorId,
    avatarUrl,
    description,
    title,
    social_profiles,
  }: EditInstructorDTO) {
    const instructorExists =
      await this.databaseInstructor.prisma.instructor.findUnique({
        where: { id: instructorId },
      });
    if (!instructorExists) {
      return new AppError("Instructor Does Not Exists", 400);
    }

    instructorExists.avatarUrl = avatarUrl || instructorExists.avatarUrl;
    instructorExists.description = description || instructorExists.description;
    instructorExists.title = title || instructorExists.title;

    return await this.databaseInstructor.prisma.instructor.update({
      where: { id: instructorId },
      data: { ...instructorExists, social_profiles: social_profiles || {} },
    });
  }

  async findById(id: string) {
    return await this.databaseInstructor.findByID(id);
  }

  async findWithCourse(id: string) {
    return await this.databaseInstructor.prisma.instructor.findUnique({
      where: { id },
      include: { Courses: true },
    });
  }

  async findCourse(courseID: string) {
    return await this.databaseInstructor.prisma.courses.findFirst({
      where: {
        id: courseID,
      },
      include: { instructor: true },
    });
  }

  async listCourses(instructorId: string) {
    return await this.databaseInstructor.prisma.courses.findMany({
      where: {
        instructor_id: instructorId,
      },
    });
  }
}

export { InstructorControllers };
