import { DatabasePurchase, DatabaseStudent } from "../database";
import { DatabaseCourse } from "../database/courses";
import AppError from "../errors/appError";

import { CreatePurchaseDTO } from "./dtos";

class PurchaseControllers {
  readonly databasePurchase = new DatabasePurchase();
  readonly databaseStudent = new DatabaseStudent();
  readonly databaseCourse = new DatabaseCourse();

  async create({ courseId, studentId }: CreatePurchaseDTO) {
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

  async findById(id: string) {
    return await this.databasePurchase.findByID(id);
  }
}

export { PurchaseControllers };
