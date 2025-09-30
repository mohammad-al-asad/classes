import express from "express";
import { createProductController, deleteProductController, getProductsController, getSingleProductController, updateProductController } from "./product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.get("/:id", getSingleProductController);
productRouter.delete("/:id", deleteProductController);
productRouter.put("/:id", updateProductController);
productRouter.post("/create-product", createProductController);

export default productRouter;
