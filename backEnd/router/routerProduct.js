import { Router } from "express";
import {
  createProduct,
  getProducts,
  removerProduct,
} from "../controller/controllerProduct.js";

const router = Router();

router
  .route("/product")
  .get(getProducts)
  .post(createProduct)
  .delete(removerProduct);

export default router;
