import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";
import { State } from "./contracts";

export interface ICreatePurchase {
  courseId: string;
  studentId: string;
}

export class DatabasePurchase {
  readonly prisma = new PrismaClient();

  async create({ courseId, studentId }: ICreatePurchase) {
    return await this.prisma.purchases.create({
      data: {
        id: uuidV4(),
        course_id: courseId,
        student_id: studentId,
        state: State.Values.Fazendo,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async findByID(id: string) {
    return await this.prisma.purchases.findUnique({
      where: { id },
    });
  }
}
