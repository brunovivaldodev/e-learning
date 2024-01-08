import { DatabaseAdmin } from "../database";
import AppError from "../errors/appError";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { config } from "../config/auth";
import { CreateAdminDTO, LoginAdminDTO } from "./dtos";

class AdminControllers {
  readonly databaseAdmin = new DatabaseAdmin();

  async create({
    email,
    confirmationPassword,
    name,
    password,
  }: CreateAdminDTO) {
    if (password != confirmationPassword) {
      return new AppError("Password Does Not Match", 400);
    }

    const adminExists = await this.databaseAdmin.findByEmail(email);

    if (adminExists) {
      return new AppError("Admin Already Exists", 400);
    }

    const hashedPassword = await hash(password, 8);

    const admin = await this.databaseAdmin.create({
      email,
      name,
      password: hashedPassword,
    });

    const token = sign(
      {
        name: admin.name,
      },
      config.secret_token,
      {
        subject: admin.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async login({ email, password }: LoginAdminDTO) {
    const adminExists = await this.databaseAdmin.findByEmail(email);

    if (!adminExists) {
      return new AppError("Email or Password Incorret", 400);
    }

    const passwordMatch = await compare(password, adminExists.password);

    if (!passwordMatch) {
      return new AppError("Email or Password Incorret", 400);
    }

    const token = sign(
      {
        name: adminExists.name,
      },
      config.secret_token,
      {
        subject: adminExists.id,
        expiresIn: config.expires_in_token,
      }
    );

    return { token };
  }

  async findById(id: string) {
    return await this.databaseAdmin.findByID(id);
  }
}

export { AdminControllers };
