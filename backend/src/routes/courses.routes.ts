import { Router } from "express";
import uploadConfig from "../config/upload";
import multer from "multer";
import {
  ensureInstructorAuthenticated,
  ensureStudentAuthenticated,
} from "./middlewares";
import { CourseControllers } from "../controllers/courses.controllers";
import { destructureObject } from "../helpers/desctructe";
import { PurchaseControllers } from "../controllers";

const router = Router();

const coursesController = new CourseControllers();
const purchasesController = new PurchaseControllers();

const uploadAvatar = multer(uploadConfig("./uploads"));

router.post(
  "/",
  ensureInstructorAuthenticated,
  uploadAvatar.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "trailer", maxCount: 1 },
  ]),
  async (request, response) => {
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
      topic,
    } = request.body;

    const fields = destructureObject(request.files);

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
      thumbnail: fields.thumbnail.filename,
      topic,
      trailer_url: fields.trailer.filename,
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
