import express from "express";
import cors from "cors";
import productsRoutes from "./src/routes/productsRouter.js";
import categoriasRoutes from "./src/routes/categoriasRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Biienvenido a la API de productos.\n" +
      "Esa API fue creada por Gabriel Aguero. Puedes acceder a los productos en /api/products y a las categorias en /api/categorias"
  );
  res.end();
});
app.use("/api/products", productsRoutes);
app.use("/api/categorias", categoriasRoutes);

// Manejo de rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Midleware para manejar errores
app.use((err, req, res, next) => {
  console.error("Error:", err);
  const status = err.status || 500;
  const message = err.message || "Error interno del servidor";
  res.status(status).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
