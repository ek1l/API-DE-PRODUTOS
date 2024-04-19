import { Router } from "express";
import { ProductControllers } from "../controllers/product.controllers";
import { IsProductIdValid } from "../middleware/isProductIdValid.middleware";

export const productRouter = Router();

const productControllers = new ProductControllers();

productRouter.post("/", productControllers.create);
productRouter.get("/", productControllers.getMany);
productRouter.patch("/:id", IsProductIdValid.execute, productControllers.update);
productRouter.delete("/:id", IsProductIdValid.execute, productControllers.delete);
