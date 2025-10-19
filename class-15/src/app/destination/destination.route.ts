import express from "express";
import {
  createDestinationController,
  deleteDestinationController,
  getDestinationsController,
  getSingleDestinationController,
  updateDestinationController,
} from "./destination.controller.js";
import { roleValidation } from "../../middleware/roleValidation.js";
import { authValidation } from "../../middleware/authValidation.js";

const destinationRouter = express.Router();

destinationRouter.get(
  "/",
  authValidation,
  roleValidation("admin"),
  getDestinationsController
);
destinationRouter.get(
  "/:id",
  authValidation,
  roleValidation("admin"),
  getSingleDestinationController
);
destinationRouter.delete(
  "/:id",
  authValidation,
  roleValidation("admin"),
  deleteDestinationController
);
destinationRouter.put(
  "/:id",
  authValidation,
  roleValidation("admin"),
  updateDestinationController
);
destinationRouter.post(
  "/create-destination",
  authValidation,
  roleValidation("admin"),
  createDestinationController
);

export default destinationRouter;
