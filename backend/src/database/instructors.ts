import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";

export interface ICreateInstructor {
  name: string;
  email: string;
  password: string;
  description: string;
  decision: string;
  title: string;
  social_profiles: object;
}

export class DatabaseInstructor {
  readonly prisma = new PrismaClient();

  async create({
    email,
    name,
    password,
    description,
    decision,
    social_profiles,
    title,
  }: ICreateInstructor) {
    return await this.prisma.instructor.create({
      data: {
        email,
        name,
        password,
        description,
        decision,
        title,
        social_profiles,
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async findByEmail(email: string) {
    const instructor = await this.prisma.instructor.findFirst({
      where: { email: email },
    });
    return instructor;
  }

  async findByID(id: string) {
    return await this.prisma.instructor.findUnique({
      where: { id },
    });
  }
}
