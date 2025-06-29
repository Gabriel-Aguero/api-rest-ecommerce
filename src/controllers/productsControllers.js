import {
  getProductsModel,
  getProductByIdModel,
  createProductModel,
  updateProductModel,
  deleteProductModel,
  searchProductsModel,
  getProductsByCategoriaModel,
} from "../models/productsModels.js";

export const getProductsController = async (req, res) => {
  const data = await getProductsModel();
  res.json(data);
};

export const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getProductByIdModel(id);

    if (!data) {
      const error = new Error("Producto no encontrado...");
      error.status = 404;
      throw error;
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const createProductController = async (req, res) => {
  const data = await createProductModel(req.body);
  res.status(201).json(data);
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await getProductByIdModel(id);

    if (!existing) {
      const error = new Error("Producto no encontrado para actualizar...");
      error.status = 404;
      throw error;
    }

    const data = await updateProductModel(id, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await getProductByIdModel(id);

    if (!existing) {
      const error = new Error("Producto no encontrado para eliminar...");
      error.status = 404;
      throw error;
    }

    await deleteProductModel(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const searchProductsController = async (req, res) => {
  try {
    console.log(req.query);
    const { q } = req.query;

    if (!q) {
      return res
        .status(400)
        .json({ message: "Falta el parámetro de búsqueda (?q=)" });
    }

    const data = await searchProductsModel(q);

    if (data.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const searchProductByCategoriaController = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const data = await getProductsByCategoriaModel(categoria);

    if (!data.length) {
      return res
        .status(404)
        .json({ message: "No se encontraron productos en esa categoría" });
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};
