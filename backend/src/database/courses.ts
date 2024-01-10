import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";

export interface ICreateCourse {
  price: number;
  instructor_id: string;
  title: string;
  categories: string;
  decision: string;
  description: string;
  duration: string;
  language: string;
  level: string;
  subtitle: string;
  topic: string;
  thumbnail: string;
  trailer_url: string;
}

export class DatabaseCourse {
  readonly prisma = new PrismaClient();

  async create({
    price,
    instructor_id,
    title,
    categories,
    decision,
    description,
    duration,
    language,
    level,
    subtitle,
    topic,
    thumbnail,
    trailer_url,
  }: ICreateCourse) {
    return await this.prisma.courses.create({
      data: {
        price: Number(price),
        categories,
        decision: decision,
        description,
        duration,
        language,
        level,
        subtitle,
        thumbnail,
        title,
        topic,
        trailer: trailer_url,
        instructor_id,
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async findByID(id: string) {
    return await this.prisma.courses.findUnique({
      where: { id },
    });
  }
}
