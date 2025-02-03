## ⬛ Jest y Supertest
**Jest** y **Supertest** son herramientas esenciales para garantizar la calidad y estabilidad del código. 
### 🔹 1. **¿Qué es Jest?**
**Jest** es un **framework de pruebas para JavaScript y TypeScript** que permite ejecutar pruebas unitarias, de integración y de cobertura de código.
####  Características clave:
*  Soporte nativo para **TypeScript**.  
*  Aislamiento de pruebas con mocks y spies.  
*  Ejecución rápida con **test runners paralelos**.  
*  Generación de **informes de cobertura de código**.
#### Ejemplo de prueba unitaria con Jest:
```ts
import { sum } from "../utils/math";
test("Debe sumar dos números correctamente", () => {   expect(sum(2, 3)).toBe(5); });
```
##### Explicación:
- `test(...)`: Define un caso de prueba.
- `expect(...).toBe(...)`: Evalúa si el resultado es el esperado.

### 🔹 2. **¿Qué es Supertest?**

Supertest es una **librería para realizar pruebas de endpoints HTTP** en aplicaciones Express, NestJS u otros frameworks de Node.js.

#### Características clave:
*  Permite probar **endpoints de APIs** sin necesidad de un servidor en ejecución.  
*  Soporta **peticiones HTTP** como GET, POST, PUT, DELETE.  
*  Facilita la validación de respuestas y status codes.

#### Ejemplo de prueba de API con Supertest y Jest:
```ts
import request from "supertest" 
describe("GET /products", () => {
	it("Debe retornar una lista de productos con status 200", async () => {    
	const response = await request(app).get("/products");    
	expect(response.status).toBe(200);    
	expect(response.body).toBeInstanceOf(Array); 
	}); 
});
```
 
#### Explicación:

- `request(app).get("/products")`: Hace una petición GET a `/products`.
- `expect(response.status).toBe(200)`: Verifica que la respuesta tenga status 200.
- `expect(response.body).toBeInstanceOf(Array)`: Verifica que el cuerpo de la respuesta sea un array.



### 🔹 3.**Conclusión**

Jest y Supertest realiza **pruebas unitarias, de integración y de carga** lo cual permiten:
*  **Asegurar que tus funciones y servicios trabajan correctamente** con pruebas unitarias.  
 * **Probar tus endpoints sin un servidor corriendo** con Supertest.  
 * **Simular dependencias externas** para evitar pruebas lentas o dependientes de la base de datos.  
 * **Verificar la cobertura de código** para cumplir con tu mínimo del 80%.