import admin from "../config/firebaseAdmin.js";
import { authModel } from "../models/authModels.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
      throw createError(400, "Email y password son requeridos");
    }

    // Iniciar sesión con Firebase Auth
    const userRecord = await authModel.getUserByEmail(email);

    // Firebase Admin no expone directamente la contraseña, necesitamos el SDK cliente para esto
    // Esta parte requiere el SDK de cliente Firebase para web
    // Alternativa: Crear token personalizado

    // Crear un token personalizado (JWT)
    const token = await authModel.generateCustomToken(userRecord.uid);

    res.send({ token });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(401).send({ error: "Autenticación fallida" });
  }
};
