# 🛒 Supermercado API

Una API REST construida con **Node.js**, **Express** y **Firebase** para gestionar productos de un supermercado.
Esta API permite crear, leer, actualizar, eliminar y buscar productos, incluyendo filtros por nombre o categoría.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore (base de datos)
- CORS
- dotenv

---

## 📁 Estructura del proyecto

src/
├── controllers/
├── models/
├── routes/
├── firebase.js
├── index.js
├── package.json
└── README.md

---

## 🚀 Inicio rápido

### 📦 Instalación

1. Cloná el repositorio:

```bash
   git clone https://github.com/tu-usuario/api-supermercado.git
   cd api-supermercado

   npm install
```

2. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
   PORT=3000
   FIREBASE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_AUTH_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_STORAGE_BUCKET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_MESSAGING_SENDER_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   FIREBASE_APP_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

3. Ejecutá el servidor:

```bash
   npm start
```

---

## 📝 Licencia

Este proyecto está licenciado bajo licencia **MIT**, si desea saber más, visite la página [de licencia](LICENSE).
