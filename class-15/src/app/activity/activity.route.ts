import express from "express";
import {
  createActivityController,
  deleteActivityController,
  getActivitiesController,
  getSingleActivityController,
  updateActivityController,
} from "./activity.controller.js";
import { roleValidation } from "../../middleware/roleValidation.js";
import { authValidation } from "../../middleware/authValidation.js";

const activityRouter = express.Router();

activityRouter.get(
  "/",
  authValidation,
  roleValidation("admin"),
  getActivitiesController
);

activityRouter.get(
  "/:id",
  authValidation,
  roleValidation("admin"),
  getSingleActivityController
);

activityRouter.delete(
  "/:id",
  authValidation,
  roleValidation("admin"),
  deleteActivityController
);

activityRouter.put(
  "/:id",
  authValidation,
  roleValidation("admin"),
  updateActivityController
);

activityRouter.post(
  "/create-activity",
  authValidation,
  roleValidation("admin"),
  createActivityController
);

export default activityRouter;
