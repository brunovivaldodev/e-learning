import { Router } from "express";
import { StudentControllers } from "../controllers";
import uploadConfig from "../config/upload";
import multer from "multer";

const router = Router();

const studentsController = new StudentControllers();

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
  return response.json({ students });
});

export default router;
