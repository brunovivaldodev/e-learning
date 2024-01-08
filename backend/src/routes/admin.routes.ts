import { Router } from "express";
import { AdminControllers } from "../controllers";

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

export default router;
