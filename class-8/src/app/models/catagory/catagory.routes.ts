import express from "express";
import { createCatagoryController, deleteCatagoryController, getAllCatagoryController, getSingleCatagoryController, updateCatagoryController } from "./catagory.controller.js";

const catagoryRouter = express.Router();

catagoryRouter.post("/create-catagory",createCatagoryController);
catagoryRouter.get("/",getAllCatagoryController);
catagoryRouter.get("/:id",getSingleCatagoryController);
catagoryRouter.delete("/:id",deleteCatagoryController);
catagoryRouter.put("/:id",updateCatagoryController);

export default catagoryRouter;
