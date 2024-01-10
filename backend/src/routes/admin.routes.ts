import { Router } from "express";
import { AdminControllers } from "../controllers";
import { ensureAdminAuthenticated } from "./middlewares";

const router = Router();

const adminController = new AdminControllers();

router.post("/", async (request, response) => {
  const { name, email, password, confirmationPassword } = request.body;

  const adminToken = await adminController.create({
    name,
    email,
    password,
    confirmationPassword,
  });

  return response.json(adminToken);
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const adminToken = await adminController.login({
    email,
    password,
  });

  return response.json(adminToken);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;

  const admin = await adminController.findById(id);
  return response.json({ admin });
});

router.post(
  "/course/:courseId",
  ensureAdminAuthenticated,

  async (request, response) => {
    const { courseId } = request.params;
    const { decision } = request.body;

    const course = await adminController.aproveCourse(courseId, decision);

    return response.json(course);
  }
);

router.post(
  "/instructor/:instructorId",
  ensureAdminAuthenticated,

  async (request, response) => {
    const { instructorId } = request.params;
    const { decision } = request.body;

    const instructor = await adminController.aproveInstructor(
      instructorId,
      decision
    );

    return response.json(instructor);
  }
);

export default router;
