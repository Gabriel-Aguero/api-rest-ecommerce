# Api Rest en Node.js

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Login

- **POST** `/login`
- **Descripción:** Devuelve un token JWT para autenticar las peticiones.
- **Body (JSON):**

```json
{
  "email": "admin@gmail.com",
  "password": "1234"
}
```

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  { "id": 1, "name": "Router Wi-Fi TP-Link Archer C6", "price": 34990 },
  { "id": 2, "name": "Impresora HP DeskJet 2375", "price": 67200 },
  { "id": 3, "name": "Silla Ergonómica Gamer", "price": 126500 }
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=teclado`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Teclado Mecánico Redragon", "price": 28700 }]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Monitor Samsung 24\" LED", "price": 134500 }
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{
  "name": "Nuevo Producto",
  "price": 999,
  "categories": ["Electronics", "Computers"]
}
```

- **Respuesta ejemplo:**

```json
{
  "id": 6,
  "name": "Nuevo Producto",
  "price": 999,
  "categories": ["Electronics", "Computers"]
}
```

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
{ "name": "Producto Actualizado", "price": 500 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
```

### Actualizar parcialmente un producto (PATCH)

- **PATCH** `/products/:id`
- **Descripción:** Actualiza parcialmente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):** Solo los campos que se desean actualizar

```json
{ "price": 600 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Notebook HP Ryzen 5", "price": 459900 }
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado

## Estructura del proyecto

```
src/
├── Controllers/
│   └── productsController.js
├── Models/
│   └── productModels.js
└── Routes/
    └── productsRouter.js
```

## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules

## Autor

- Linkedln: [Gabriel Agüero](https://www.linkedin.com/in/gabrielhaguero/)
- GitHub: (https://github.com/Gabriel-Aguero)
