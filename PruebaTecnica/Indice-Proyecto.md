# Documentación de la API: Inventory-System

## ⬛Descripción del Proyecto

**Inventory-System** es un sistema para gestionar inventarios de productos, movimientos de inventarios entre diferentes tiendas y registrar las operaciones de cada producto. Está diseñado para ser escalable, modular y fácil de integrar con otros sistemas y bases de datos.

---
# Decisiones Técnicas
## ⬛Tecnologías Utilizadas

| Tecnologías     | Descripción                                                           |
| --------------- | --------------------------------------------------------------------- |
| **Node.js**     | Entorno de ejecución para el backend.                                 |
| **Docker**      | Sistema para generar contenedores.                                    |
| **TypeScript**  | Lenguaje de programación para garantizar un orden.                    |
| **Prisma ORM**: | Para la interacción con la base de datos PostgreSQL o cualquier otra. |
| **Swagger**     | Para la documentación interactiva de la API.                          |
| **Jest**        | Framework para pruebas unitarias y de integración.                    |
| **Supertest**   | Librería para realizar pruebas de integración sobre la API.           |
| **Artillery**   | Herramienta de pruebas de carga para simular tráfico en la API.       |
| **Winston**     | Librería para el registro de logs de la aplicación.                   |
| **Express.js**  | Framework web para manejar solicitudes HTTP.                          |
## ⬛[[01-Excalidraw-Diagrama-arquitectura|Diagrama arquitectura]]


## ⬛Diagrama base de datos

## ⬛[[Estructura de trabajo]]

## ⬛[[Prisma ORM]]

## ⬛[[PruebaTecnica/Herramientas utilizadas/Docker|Docker]]

## ⬛ [[Jest y Supertest]]

## ⬛[[Artillery]]

## ⬛ [[Winston]]

## ⬛ [[Swagger]]


## [[Ejecutar aplicación usando Docker]]
## ⬛ Backups
1. Los backups están listos para su guardado por día como eliminar sus datos cada 3 días gracias a la configuración de docker:
```docker
  backup:
    image: postgres:13-alpine
    container_name: inventorysystem-backup
    depends_on:
      - db
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
    volumes:
      - ./backups:/backups
    entrypoint: ["/bin/sh", "-c"]
    command:
      - |
        while true; do
          echo "Creando backup..."
          PGPASSWORD=${POSTGRES_PASSWORD} pg_dump -U ${POSTGRES_USER} -h db -d ${POSTGRES_DB} > /backups/snapshot_$(date +\%F).sql
          find /backups -type f -mtime +3 -name "snapshot_*.sql" -exec rm {} \;
          echo "Backup completado."
          sleep 86400
        done
```
### 🔹 1. **Descripción:**
1. Si necesitas restaurar un snapshot en PostgreSQL desde un archivo de backup en tu sistema de archivos local (`./backups/`), usa el siguiente comando:

```bash
cat ./backups/snapshot_YYYY-MM-DD.sql | docker exec -i inventorysystem-db psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
```

#### Explicación
- **`cat ./backups/snapshot_YYYY-MM-DD.sql`**: Este comando lee el archivo de backup en la carpeta `./backups/` con el nombre `snapshot_YYYY-MM-DD.sql` (reemplaza `YYYY-MM-DD` con la fecha de tu archivo).
- **`docker exec -i inventorysystem-db psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}`**: Este comando ejecuta `psql` dentro del contenedor `inventorysystem-db` y le pasa el archivo de backup leído por `cat`.
    - **`-U ${POSTGRES_USER}`**: Utiliza el usuario de PostgreSQL definido en la variable de entorno `${POSTGRES_USER}`.
    - **`-d ${POSTGRES_DB}`**: Especifica la base de datos de destino donde restaurar los datos.
- **`-i`**: Se utiliza para habilitar la entrada interactiva para que los datos del archivo SQL se pasen correctamente al contenedor.

1. Guardar de manera manual la base de datos:
```bash
docker compose up -d db
```

