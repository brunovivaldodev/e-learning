import { Router } from "express";
import {
  CourseControllers,
  InstructorControllers,
  StudentControllers,
} from "../controllers";
import uploadConfig from "../config/upload";
import multer from "multer";

const router = Router();

const studentsController = new StudentControllers();
const coursesController = new CourseControllers();
const instructorController = new InstructorControllers();

const uploadAvatar = multer(uploadConfig("./uploads"));

router.post("/", async (request, response) => {
  const { name, email, password, confirmationPassword } = request.body;

  const studentToken = await studentsController.create({
    name,
    email,
    password,
    confirmationPassword,
  });

  return response.json(studentToken);
});

router.put(
  "/:id",
  uploadAvatar.single("avatar_url"),
  async (request, response) => {
    const { id } = request.params;

    const { title, description } = request.body;

    const avatarUrl = request.file?.filename;

    const studentToken = await studentsController.edit({
      title,
      description,
      avatarUrl: avatarUrl || null,
      studentId: id,
    });

    return response.json(studentToken);
  }
);

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const studentToken = await studentsController.login({
    email,
    password,
  });

  return response.json(studentToken);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  const students = await studentsController.findById(id);
  return response.json(students);
});

router.get("/courses/list", async (request, response) => {
  const courses = await coursesController.findMany();
  return response.json(courses);
});

router.get("/courses/recents", async (request, response) => {
  const coursesRecents = await coursesController.getRecents();
  return response.json(coursesRecents);
});

router.get("/courses/:id", async (request, response) => {
  const { id } = request.params;
  const course = await coursesController.getById(id);
  return response.json(course);
});

router.get("/instructor/:id", async (request, response) => {
  const { id } = request.params;
  const course = await instructorController.findWithCourse(id);
  return response.json(course);
});

export default router;
