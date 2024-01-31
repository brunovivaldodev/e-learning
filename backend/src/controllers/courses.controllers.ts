import AppError from "../errors/appError";
import { CreateCourseDTO, CreatePurchaseDTO, EditCourseDTO } from "./dtos";
import { DatabaseCourse } from "../database/courses";
import {
  DatabaseInstructor,
  DatabasePurchase,
  DatabaseStudent,
} from "../database";
import {
  Categories,
  Decision,
  Duration,
  Language,
  Level,
} from "../database/contracts";

class CourseControllers {
  readonly databaseCourse = new DatabaseCourse();
  readonly databaseInstructor = new DatabaseInstructor();

  readonly databasePurchase = new DatabasePurchase();
  readonly databaseStudent = new DatabaseStudent();

  async create({
    categories,
    description,
    duration,
    instructor_id,
    language,
    level,
    price,
    subtitle,
    thumbnail,
    title,
    trailer_url,
    lessons,
    requirements,
    targetAudience,
    lessonsArray,
    sections,
  }: CreateCourseDTO) {
    const instructorExists = await this.databaseInstructor.findByID(
      instructor_id
    );

    if (instructorExists?.decision === Decision.Values.Pendente) {
      throw new AppError(
        "Instructor Pendente, Não é permitido cadastrar curso"
      );
    }
    if (!Language.parse(language)) {
      throw new AppError("Lingua De Curso Invalida");
    }

    if (!Categories.parse(categories)) {
      throw new AppError("Categoria De Curso Invalida");
    }

    if (!Level.parse(level)) {
      throw new AppError("Nivel De Curso Invalida");
    }

    if (!Duration.parse(duration)) {
      throw new AppError("Duração De Curso Invalida");
    }

    const course = await this.databaseCourse.create({
      categories,
      description,
      duration: duration,
      decision: Decision.Values.Pendente,
      instructor_id,
      language,
      level,
      price,
      subtitle,
      thumbnail,
      title,
      trailer_url,
      lessons,
      requirements,
      targetAudience,
      lessonsArray,
      sections,
    });

    return { course };
  }

  async edit({
    courseId,
    categories,
    decision,
    description,
    duration,
    language,
    level,
    price,
    subtitle,
    thumbnail,
    title,
    topic,
    trailer_url,
  }: EditCourseDTO) {
    const courseExists = await this.databaseCourse.prisma.courses.findUnique({
      where: { id: courseId },
    });
    if (!courseExists) {
      return new AppError("Course Does Not Exists", 400);
    }

    courseExists.categories = categories || courseExists.categories;
    courseExists.description = description || courseExists.description;
    courseExists.title = title || courseExists.title;
    courseExists.decision = decision || courseExists.decision;
    courseExists.duration = duration || courseExists.duration;
    courseExists.language = language || courseExists.language;
    courseExists.price = price || courseExists.price;
    courseExists.subtitle = subtitle || courseExists.subtitle;
    courseExists.thumbnail = thumbnail || courseExists.thumbnail;
    courseExists.level = level || courseExists.level;
    courseExists.trailer = trailer_url || courseExists.trailer;

    return await this.databaseCourse.prisma.courses.update({
      where: { id: courseId },
      data: courseExists,
    });
  }

  async findById(id: string) {
    return await this.databaseCourse.findByID(id);
  }

  async getById(id: string) {
    return await this.databaseCourse.getById(id);
  }
  async purchase({ courseId, studentId }: CreatePurchaseDTO) {
    const studentExists = this.databaseStudent.findByID(studentId);

    if (!studentExists) {
      throw new AppError("Student not exists");
    }

    const courseExists = this.databaseCourse.findByID(courseId);

    if (!courseExists) {
      throw new AppError("course not exists");
    }
    const purchase = await this.databasePurchase.create({
      courseId,
      studentId,
    });

    return { purchase };
  }

  async findMany() {
    const courses = await this.databaseCourse.prisma.courses.findMany();

    return courses;
  }

  async getRecents() {
    const recents = await this.databaseCourse.prisma.courses.findMany({
      take: 4,
    });

    return recents;
  }
}

export { CourseControllers };
