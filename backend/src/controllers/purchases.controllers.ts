import { DatabasePurchase, DatabaseStudent } from "../database";
import { DatabaseCourse } from "../database/courses";
import AppError from "../errors/appError";

import { CreatePurchaseDTO } from "./dtos";

class PurchaseControllers {
  readonly databasePurchase = new DatabasePurchase();
  readonly databaseStudent = new DatabaseStudent();
  readonly databaseCourse = new DatabaseCourse();

  async create({ courseId, studentId }: CreatePurchaseDTO) {
    const studentExists = await this.databaseStudent.findByID(studentId);

    if (!studentExists) {
      return new AppError("Student not exists");
    }

    const courseExists = await this.databaseCourse.findByID(courseId);

    if (!courseExists) {
      return new AppError("course not exists");
    }

    const purchaseExist = await this.databaseCourse.prisma.purchases.findFirst({
      where: { course_id: courseId, student_id: studentId },
    });

    if (purchaseExist) {
      return new AppError("Curso já pago. Por favor acesse o seu perfíl");
    }

    const purchase = await this.databasePurchase.create({
      courseId,
      studentId,
    });

    return { purchase };
  }

  async findById(id: string) {
    return await this.databasePurchase.findByID(id);
  }
}

export { PurchaseControllers };
