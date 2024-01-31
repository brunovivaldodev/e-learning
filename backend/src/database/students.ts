import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";

export interface ICreateStudent {
  name: string;
  email: string;
  password: string;
  description?: string;
}

export class DatabaseStudent {
  readonly prisma = new PrismaClient();

  async create({ email, name, password, description }: ICreateStudent) {
    return await this.prisma.student.create({
      data: {
        email,
        name,
        password,
        description,
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async findByEmail(email: string) {
    const student = await this.prisma.student.findFirst({
      where: { email: email },
    });
    return student;
  }

  async findByID(id: string) {
    return await this.prisma.student.findUnique({
      where: { id },
      include: {
        purchases: {
          include: {
            course: true,
          },
        },
      },
    });
  }
}
