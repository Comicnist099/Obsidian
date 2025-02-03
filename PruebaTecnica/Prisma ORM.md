## ⬛Prisma ORM
Prisma ORM es una herramienta poderosa que simplifica la interacción con bases de datos en proyectos de TypeScript.
### 🔹 1. **Tipado estático y autocompletado con TypeScript**
Prisma genera automáticamente un **cliente fuertemente tipado** basado en tu esquema de base de datos. Esto te ayuda a:  
*  Evitar errores en consultas SQL.  
*  Obtener autocompletado en el IDE.  
*  Detectar problemas en tiempo de compilación.
```ts
 const product = await prisma.product.findUnique({   where: { id: "123" }, }); console.log(product?.name); 
 // TypeScript sabe que `product` tiene un campo `name`
```

### 🔹 2. **Facilidad en las consultas SQL**
Prisma ofrece una API declarativa e intuitiva, reduciendo la complejidad de manejar SQL manualmente o con ORMs tradicionales como Sequelize.

```ts
const products = await prisma.product.findMany({   where: { category: "Electronics" },   orderBy: { price: "desc" }, });
```
Esto reemplaza consultas SQL complejas como:
```sql
SELECT * FROM products WHERE category = 'Electronics' ORDER BY price DESC;
```
### 🔹 3. **Migraciones automáticas y controladas**

Prisma proporciona herramientas como `prisma migrate` para gestionar cambios en el esquema de base de datos de forma estructurada y reversible.
```bash
pnpm prisma migrate dev --name add_price_field
```
Esto crea automáticamente archivos de migración en SQL y actualiza la base de datos.
### 🔹 4. **Compatibilidad con múltiples bases de datos**

* PostgreSQL  
 * MySQL  
 * SQLite
 * MongoDB  
 * SQL Server
Puedes cambiar de base de datos sin reescribir código, solo ajustando la configuración en archivo `prisma.schema`.
### 🔹 5. **Soporte para relaciones y cargas eficientes**

Prisma maneja relaciones entre tablas con facilidad, optimizando la obtención de datos mediante `include` y `select`.
```ts
const productWithCategory = await prisma.product.findUnique({   where: { id: "123" },   include: { category: true }, // Carga la categoría asociada });
```
### 🔹 6. **Integración con herramientas modernas**

- Compatible con **GraphQL** y **REST APIs**.
- Funciona bien con frameworks como **NestJS**, **Next.js** y **Express**.
- Se integra con herramientas de CI/CD y Docker.
### 🔹 7. **Optimización y rendimiento**

Prisma optimiza las consultas a la base de datos y reduce las sobrecargas de rendimiento con su sistema de **batching y caching** automático.


Dado que la api se ejecuta en **Node.js, Prisma y TypeScript**, Prisma te permite:  
*  Escribir código más limpio y mantenible.  
*  Evitar errores de tipado en consultas SQL.  
*  Automatizar migraciones y facilitar cambios en la base de datos.  
*  Mejorar la seguridad y escalabilidad de tu aplicación.
