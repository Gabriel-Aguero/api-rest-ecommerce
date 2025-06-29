import { getCategoriaModel } from "../models/categoriaModels.js";

export const getCategoriaController = async (req, res) => {
  const data = await getCategoriaModel();
  res.json(data);
};
