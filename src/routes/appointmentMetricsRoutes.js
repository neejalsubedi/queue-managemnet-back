import express from "express";
import { getAppointmentMetrics } from "../controllers/appointmentMetricsController.js";
import { authenticate } from "../middleware/auth.js";
import { authorizeModule } from "../middleware/authorizeModule.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  authorizeModule("AM", "read"),
  getAppointmentMetrics,
);

export default router;
