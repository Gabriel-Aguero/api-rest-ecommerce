import {
  getProductsModel,
  getProductByIdModel,
  createProductModel,
  updateProductModel,
  deleteProductModel,
} from "../models/productsModels.js";

export const getProductsController = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
};

export const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await getProductByIdModel(id);

    if (!products) {
      const error = new Error("Producto no encontrado...");
      error.status = 404;
      throw error;
    }
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const createProductController = async (req, res) => {
  const { name, price, categories } = req.body;

  const products = await createProductModel({ name, price, categories });
  res.status(201).json(products);
};

export const updateProductController = async (req, res) => {
  const productId = req.params.id;
  const { name, price, categories } = req.body;

  const products = await updateProductModel(productId, {
    name,
    price,
    categories,
  });

  if (!products) {
    return res.status(404).json({ message: "Producto no encontrado..." });
  }
  res.json(products);
};

export const deleteProductController = async (req, res) => {
  const productId = req.params.id;

  try {
    const { id } = req.params;
    const products = await deleteProductModel(id);

    if (!products) {
      return res.status(404).json({ message: "Producto no encontrado..." });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const searchProductsController = async (req, res) => {
  const { name } = req.query;

  try {
    const products = await getProductsModel();

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
  } catch (error) {
    next(error);
  }
};
