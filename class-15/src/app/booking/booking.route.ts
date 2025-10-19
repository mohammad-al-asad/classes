import express from "express";
import {
  createBookingController,
  deleteBookingController,
  getBookingsController,
  getSingleBookingController,
  updateBookingController,
} from "./booking.controller.js";
import { roleValidation } from "../../middleware/roleValidation.js";
import { authValidation } from "../../middleware/authValidation.js";

const bookingRouter = express.Router();

bookingRouter.get(
  "/",
  authValidation,
  roleValidation("customer"),
  getBookingsController
);

bookingRouter.get(
  "/:id",
  authValidation,
  roleValidation("customer"),
  getSingleBookingController
);

bookingRouter.delete(
  "/:id",
  authValidation,
  roleValidation("customer"),
  deleteBookingController
);

bookingRouter.put(
  "/:id",
  authValidation,
  roleValidation("customer"),
  updateBookingController
);

bookingRouter.post(
  "/create-booking",
  authValidation,
  roleValidation("customer"),
  createBookingController
);

export default bookingRouter;
