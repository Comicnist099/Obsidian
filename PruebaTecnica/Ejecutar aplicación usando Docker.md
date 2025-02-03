## ⬛Requisitos Previos:

1. [Node JS](https://nodejs.org/es/)    
2. [VSCode - Visual Studio Code](https://code.visualstudio.com/)       
3. [Postman](https://www.postman.com/downloads/)    
4. [Docker Desktop](https://www.docker.com/get-started)
5. [TablePlus | Modern, Native Tool for Database Management](https://tableplus.com/)

---
## ⬛Ejecución:
1. Clona el repositorio y entrar al proyecto:
```bash
git clone https://github.com/Comicnist099/inventory.git
```
2. Entrar a la carpeta
```bash
cd inventory
```
3. Seguidamente necesitamos abrir el proyecto con un editor de código en este caso usaremos VS Code. Se puede importar manualmente o de manera directo con el comando:
```bash
code .
```
4. En en el archivo raíz configura la base de datos creando un archivo `.env`, toma en cuenta el `.env.example` para poder saber las variables necesarias, las variables `POSTGRES_USER`, `POSTGRES_PASSWORD`,`POSTGRES_DB` son de libre elección estas están vinculadas al `docker-compose.yml` lo cual te permitirá crear un entorno automáticamente, no olvidar remplazar los atributos en la variable `DATABASE_URL`:  
```json
#Crear usuario y contraseña de la base de datos
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
PORT=3000
SWAGGER_API_URL=http://localhost:3000/api/

#Colocar los mismos datos de arriba correspondientes

DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@localhost:5432/<POSTGRES_DB>?schema=public"
```
5. Ejecuta el comando docker lo cual creara los entornos automáticamente:
```bash
docker-compose up --build
```
6. Al completar la carga abre otra terminal y ejecuta el siguiente comando para poder observar los contenedores activos:
```bash
docker container ls
```
7. Si los siguientes contenedores se ven de esta forma quiere decir que los servidores ya se encuentran activos:
```bash
CONTAINER ID   IMAGE                COMMAND                  CREATED         STATUS         PORTS                    NAMES
c49f7d94154a   inventory-test       "tail -f /dev/null"      9 minutes ago   Up 9 minutes   3000/tcp                 inventorysystem-test
5f45ce3f1a13   inventory-app        "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   0.0.0.0:3000->3000/tcp   inventorysystem-app
a1d44b4220d0   postgres:13-alpine   "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   0.0.0.0:5432->5432/tcp   inventorysystem-db
```
8. La API estará disponible en `http://localhost:3000` o el puerto asignado en la variable `PORT` en el archivo `.env`. Mientras que en el puerto `5432` se encuentra ejecutándose la base de datos de `postgres`.
9. La Documentación de la API se documenta automáticamente usando la herramienta **Swagger**. La documentación está disponible en como también es comprobable utilizando:
```bash
http://localhost:3000/api-docs
```

---
## ⬛Extra:
### 🔹**Crear datos template:**
1. Abre la terminal y ve a la ubicación del proyecto mientras este se esta ejecutando.
2. Ejecuta el siguiente comando para la creación de datos templates:
```bash
 docker-compose exec test pnpm run create-base-data-build
```
3. Si se muestra el siguiente mensaje este significa que se ha ejecutado el comando con éxito:
```bash
> inventorysystem@1.0.0 create-base-data-build /app                               > npm run tsc && node dist/createBaseData.js
> inventorysystem@1.0.0 tsc
> npx tsc                                                                         Datos base creados con éxito     
```
4. Con la herramientas `TablePlus` puedes acceder a la base de datos colocando el tipo de base de datos que como sus datos colocados en el archivo `.env` como se ve a continuación:
---
### 🔹**Ejecutar testing (Jest y Supertest)**
1. Abre la terminal y ve a la ubicación del proyecto mientras este se esta ejecutando.
2. Una vez ejecutado el comando `docker-compose up --build` ejecutas el comando:
```bash
 docker-compose exec test pnpm run test:coverage
```
3. Esto genera una carpeta `./coverage` en la raíz del sistema, que permite acceder los resultados del testing solo es cosa de entrar a la carpeta he ir a la ubicación `lcov-report/index.html` , gracias al atributo `roots: ["src/modules/"]` del objeto ubicado en el archivo `jest.config.ts`, este puede acceder a todos los módulos y encontrar todos los archivos test.
```ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["src/modules/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};

export default config;
```
4. Para entrar a una representación mas grafica de los resultados visto en consola entra a la ruta `./coverage/Iconv-report/index.html`: 

---

#### 🔹**Ejecutar tests de carga (Artillery)**
1. Una vez ejecutado el comando `docker-compose up --build` ejecutas el comando:
```bash
 docker-compose exec test pnpm run load-test-all
```
2. Esto permite hacer un test de carga donde los registros se guardaran en la carpeta raíz `./logs`
3. La composición de cada test de carga esta divido por petición por ejemplo `load-test-all-products.yml` si se requieren 500 peticiones es necesario cambiar el atributo
   `arrivalRate:1` a `arrivalRate:500`
```yml
# load-test-all-products.yml
config:

  target: "http://localhost:3000" 
  phases:
    - duration: 60
      arrivalRate: 1
scenarios:

  - name: "Obtener todos los productos"

    flow:
      - get:
          url: "/api/products?page=1&pageSize=10&category=Test Category&minPrice=0&maxPrice=10000" 
```
