import { getCategoriaModel } from "../models/categoriaModel.js";

export const getCategoriaController = async (req, res) => {
  const data = await getCategoriaModel();
  res.json(data);
};
