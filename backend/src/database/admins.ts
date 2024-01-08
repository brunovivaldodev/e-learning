import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";

export interface ICreateAdmin {
  name: string;
  email: string;
  password: string;
}

export class DatabaseAdmin {
  readonly prisma = new PrismaClient();

  async create({ email, name, password }: ICreateAdmin) {
    return await this.prisma.admin.create({
      data: {
        email,
        name,
        password,
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async findByEmail(email: string) {
    const admin = await this.prisma.admin.findFirst({
      where: { email: email },
    });
    return admin;
  }

  async findByID(id: string) {
    return await this.prisma.admin.findUnique({
      where: { id },
    });
  }
}
