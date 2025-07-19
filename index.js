import express from "express";
import cors from "cors";
import productsRoutes from "./src/routes/productsRouter.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    🖐️​ <strong>Bienvenido</strong><br><br>
    👨‍💻​ <strong>Soy Gabriel Agüero</strong><br><br>
    
    🎓​ Este proyecto fue creado en contexto del Curso de Node JS. 🎓​<br><br>
    ⭐​ Esta api te permite gestionar productos de una tienda.<br><br>

    🥇 ​La puedes encontrar en mi repositorio de GitHub. 
    👉 <a href="https://github.com/Gabriel-Aguero">https://github.com/Gabriel-Aguero</a><br><br>


    📚 <strong>Tecnologías utilizadas:</strong><br>
    - Node.js<br>
    - Express.js<br>
    - Firebase Firestore<br>
    - ES6 Modules<br> 

    📌 <strong>Endpoints disponibles:</strong><br>
    <ul>
      <li> ✔️ GET /api/products → Listar todos los productos</li>
      <li> ✔️ GET /api/products/:id → Obtener un producto por ID</li>
      <li> ✔️ GET /api/products/search?name=palabra → Buscar productos por nombre</li>
      <li> ✔️ POST /api/products → Crear un producto</li>
      <li> ✔️ PUT /api/products/:id → Actualizar un producto</li>
      <li> ✔️ DELETE /api/products/:id → Eliminar un producto</li>
    </ul>

    🧪 Ideal para usar desde Postman o conectarse a un frontend.
  `);
});

app.use("/api", productsRoutes);
app.use(authRoutes);

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
