import { Router } from "express";
import studentRoutes from "./student.routes";
import adminRoutes from "./admin.routes";
import instructorRoutes from "./instructor.routes";
import coursesRoutes from "./courses.routes";

const routes = Router();

routes.use("/students", studentRoutes);
routes.use("/admins", adminRoutes);
routes.use("/instructors", instructorRoutes);
routes.use("/courses", coursesRoutes);

export default routes;
