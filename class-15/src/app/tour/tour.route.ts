import express from "express";
import {
  createTourController,
  deleteTourController,
  getToursController,
  getSingleTourController,
  updateTourController,
} from "./tour.controller.js";
import { roleValidation } from "../../middleware/roleValidation.js";
import { authValidation } from "../../middleware/authValidation.js";

const tourRouter = express.Router();

tourRouter.get(
  "/",
  authValidation,
  getToursController
);

tourRouter.get(
  "/:id",
  authValidation,
  getSingleTourController
);

tourRouter.delete(
  "/:id",
  authValidation,
  roleValidation("admin"),
  deleteTourController
);

tourRouter.put(
  "/:id",
  authValidation,
  roleValidation("admin"),
  updateTourController
);

tourRouter.post(
  "/create-tour",
  authValidation,
  roleValidation("admin"),
  createTourController
);

export default tourRouter;
