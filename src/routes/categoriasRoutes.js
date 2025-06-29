import { Router } from "express";
import { getCategoriaController } from "../controllers/categoriaController.js";

const router = Router();

router.get("/", getCategoriaController);

export default router;
