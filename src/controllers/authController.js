import admin from "../config/firebaseAdmin.js";
import { users } from "../models/authModels.js"; // Asegúrate de que este archivo exporte un array de usuarios simulados
import jwt from "jsonwebtoken";

export const loginController = (req, res) => {
  const { email, password } = req.body;

  // Buscar el usuario
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // Crear el token
  const token = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET, // debe estar definido en tu .env
    { expiresIn: "1h" }
  );

  res.json({ token });
};

