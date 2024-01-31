import { Router } from "express";
import uploadConfig from "../config/upload";
import multer from "multer";
import {
  ensureInstructorAuthenticated,
  ensureStudentAuthenticated,
} from "./middlewares";
import { CourseControllers } from "../controllers/courses.controllers";
import {
  findFileByFieldname,
  organizeLessonsByNumber,
} from "../helpers/desctructe";
import { PurchaseControllers } from "../controllers";

const router = Router();

const coursesController = new CourseControllers();
const purchasesController = new PurchaseControllers();

const uploadAvatar = multer(uploadConfig("./uploads"));

router.post(
  "/",
  ensureInstructorAuthenticated,
  uploadAvatar.any(),
  async (request, response) => {
    const files = request.files as Express.Multer.File[];

    const { id } = request.user;

    const {
      description,
      title,
      categories,
      duration,
      language,
      level,
      price,
      subtitle,
      targetAudience,
      requirements,
      lessons,
      sections,
    } = request.body;

    const course = await coursesController.create({
      description,
      title,
      categories,
      duration,
      instructor_id: id,
      language,
      level,
      price,
      subtitle,
      thumbnail: findFileByFieldname("thumbnail", files)?.filename as string,
      trailer_url: findFileByFieldname("trailer", files)?.filename as string,
      sections: sections.split(","),
      lessonsArray: organizeLessonsByNumber(files),
      targetAudience: targetAudience.split(","),
      requirements: requirements.split(","),
      lessons: lessons.split(","),
    });

    return response.json(course);
  }
);

router.post(
  "/:id/purchase",
  ensureStudentAuthenticated,
  async (request, response) => {
    const { id } = request.user;
    const { id: courseId } = request.params;

    const purchase = await purchasesController.create({
      courseId,
      studentId: id,
    });

    return response.json(purchase);
  }
);

export default router;
