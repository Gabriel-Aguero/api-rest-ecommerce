import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductsController,
  searchProductByCategoriaController,
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/search", searchProductsController);
router.get("/categoria/:categoria", searchProductByCategoriaController);
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
