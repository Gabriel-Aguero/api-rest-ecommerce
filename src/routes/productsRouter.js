import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductsController,
} from "../controllers/productsControllers.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/products", getProductsController);
router.get("/products/search", searchProductsController);
router.get("/products/:id", getProductByIdController);
router.post("/products", auth, createProductController);
router.put("products/:id", updateProductController);
router.delete("products/:id", deleteProductController);

export default router;
