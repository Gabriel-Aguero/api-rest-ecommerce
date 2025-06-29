import { Router } from "express";
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductByCategoriaController,
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.get("/categoria/:categoria", searchProductByCategoriaController);

export default router;
