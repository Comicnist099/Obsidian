## ⬛Artillery
### 🔹 1. **¿Qué es Artillery?**
Artillery es una herramienta de **pruebas de rendimiento** que permite simular usuarios concurrentes y medir el rendimiento de tu API REST o GraphQL.

####  Características clave:
*  Simulación de **carga realista** con usuarios concurrentes.  
*  **Análisis de métricas** como tiempos de respuesta y tasas de error.  
*  Configuración flexible en archivos `.yml` o `.json`.  
*  Integración con **CI/CD** y ejecución en **Docker**.

### 🔹 2. **Creación de un script de prueba de carga**

Para probar el endpoint `POST /api/product`, puedes definir un archivo de configuración en **YAML**:
#### Ejemplo de prueba de carga:
```yaml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60  # Ejecuta la prueba durante 60 segundos
      arrivalRate: 50 # Simula 50 usuarios por segundo
scenarios:
  - flow:
      - post:
          url: "/api/product"
          json:
            name: "Test Product"
            overview: "This is a test product"
            price: 19.99
            category: "Test Category"
            sku: "TEST123"
          expect:
            - statusCode: 201
```
#### Explicación:
- `target`: Especifica la URL base de tu API.
- `phases`: Define la duración y la cantidad de solicitudes por segundo.
- `flow`: Describe el escenario de prueba, en este caso, un **POST** a `/api/product`.
- `expect`: Verifica que la API devuelva un **status 201**.