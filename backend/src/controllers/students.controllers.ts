import { DatabaseStudent } from "../database";
import AppError from "../errors/appError";
import {} from "./dtos";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { config } from "../config/auth";
import { CreateStudentDTO, EditStudentDTO } from "./dtos/students";
import { LoginStudentDTO } from "./dtos/students/loginStudent.dto";

class StudentControllers {
  readonly databaseStudent = new DatabaseStudent();

  async create({
    email,
    confirmationPassword,
    name,
    password,
    description,
  }: CreateStudentDTO) {
    if (password != confirmationPassword) {
      return new AppError("Password Does Not Match", 400);
    }

    const studentExists = await this.databaseStudent.findByEmail(email);

    if (studentExists) {
      return new AppError("Student Already Exists", 400);
    }

    const hashedPassword = await hash(password, 8);

    const student = await this.databaseStudent.create({
      email,
      name,
      password: hashedPassword,
      description,
    });

    const token = sign(
      {
        name: student.name,
        avatarUrl: student.avatarUrl,
      },
      config.secret_token,
      {
        subject: student.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async login({ email, password }: LoginStudentDTO) {
    const studentExists = await this.databaseStudent.findByEmail(email);

    if (!studentExists) {
      return new AppError("Email or Password Incorret", 400);
    }

    const passwordMatch = await compare(password, studentExists.password);

    if (!passwordMatch) {
      return new AppError("Email or Password Incorret", 400);
    }

    const token = sign(
      {
        name: studentExists.name,
        avatarUrl: studentExists.avatarUrl,
      },
      config.secret_token,
      {
        subject: studentExists.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async edit({ studentId, avatarUrl, description, title }: EditStudentDTO) {
    const studentExists = await this.databaseStudent.prisma.student.findUnique({
      where: { id: studentId },
    });
    if (!studentExists) {
      return new AppError("Student Does Not Exists", 400);
    }

    studentExists.avatarUrl = avatarUrl;
    studentExists.description = description;
    studentExists.title = title;

    return await this.databaseStudent.prisma.student.update({
      where: { id: studentId },
      data: studentExists,
    });
  }

  async findById(id: string) {
    return await this.databaseStudent.findByID(id);
  }
}

export { StudentControllers };
