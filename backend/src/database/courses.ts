import { PrismaClient } from "@prisma/client";
import { randomUUID as uuidV4 } from "crypto";
import { transformLessons } from "../helpers/desctructe";

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
  thumbnail: string;
  trailer_url: string;
  targetAudience: string[];
  requirements: string[];
  lessons: string[];
  sections: string[];
  lessonsArray: Record<string, Express.Multer.File[]>;
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
    thumbnail,
    trailer_url,
    lessons,
    requirements,
    targetAudience,
    sections,
    lessonsArray,
  }: ICreateCourse) {
    const course = await this.prisma.courses.create({
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
        lessons,
        requirements,
        target_audience: targetAudience,
        trailer: trailer_url,
        instructor_id,
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    const transformedLessons = transformLessons(lessonsArray);

    sections.forEach(async (element, index) => {
      await this.prisma.course_Section.create({
        data: {
          name: element,
          id: uuidV4(),
          created_at: new Date(),
          updated_at: new Date(),
          course_id: course.id,
          lecture: {
            createMany: {
              data: transformedLessons[index],
            },
          },
        },
      });
    });

    // const t = await this.prisma.course_Section.upsert({ create: {} });
  }

  async findByID(id: string) {
    return await this.prisma.courses.findUnique({
      where: { id },
    });
  }

  async getById(id: string) {
    return await this.prisma.courses.findUnique({
      where: { id },
      include: {
        instructor: true,
        course_section: {
          include: { lecture: true },
        },
      },
    });
  }
}
