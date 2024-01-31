import { Router } from "express";
import { InstructorControllers } from "../controllers";
import uploadConfig from "../config/upload";
import multer from "multer";
import { ensureInstructorAuthenticated } from "./middlewares";

const router = Router();

const instructorsController = new InstructorControllers();

const uploadAvatar = multer(uploadConfig("./uploads"));

router.post("/", async (request, response) => {
  const {
    name,
    email,
    password,
    confirmationPassword,
    description,
    social_profiles,
    title,
  } = request.body;

  const instructorToken = await instructorsController.create({
    name,
    email,
    password,
    confirmationPassword,
    description,
    social_profiles,
    title,
  });

  return response.json(instructorToken);
});

router.put(
  "/:id",
  ensureInstructorAuthenticated,
  uploadAvatar.single("avatar_url"),
  async (request, response) => {
    const { id } = request.params;

    const { title, description, social_profiles } = request.body;

    const avatarUrl = request.file?.filename;

    const instructorToken = await instructorsController.edit({
      title,
      description,
      avatarUrl: avatarUrl || null,
      instructorId: id,
      social_profiles,
    });

    return response.json(instructorToken);
  }
);

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const instructorToken = await instructorsController.login({
    email,
    password,
  });

  return response.json(instructorToken);
});

router.get(
  "/courses",
  ensureInstructorAuthenticated,
  async (request, response) => {
    const { id } = request.user;

    const courses = await instructorsController.listCourses(id);
    return response.json(courses);
  }
);

router.get(
  "/courses/:id",
  ensureInstructorAuthenticated,
  async (request, response) => {
    const { id } = request.params;

    const course = await instructorsController.findCourse(id);
    return response.json(course);
  }
);

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  const instructors = await instructorsController.findById(id);
  return response.json(instructors);
});

export default router;
