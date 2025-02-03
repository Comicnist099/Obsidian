## ⬛Estructura de trabajo
### **🔹Clean Architecture** con influencia de **arquitectura hexagonal**

1.  **Capa de Presentación**
	- `controllers/` → Maneja las solicitudes y respuestas HTTP.
2.  **Capa de Aplicación (Service Layer)**
	- `services/` → Contiene la lógica de negocio.
	- `factories/` → Puede usarse para instanciar servicios y repositorios.
3. **Capa de Dominio**
	- `models/` → Representa las estructuras de datos.
	- `types/` → Define tipos e interfaces para la aplicación.
	- `validators/` → Define reglas de validación de datos.
4. **Capa de Datos (Data Layer)**
	- `repositories/` → Accede a la base de datos y encapsula las consultas.
5. **Capa de Infraestructura**
	- `mappers/` → Convierte datos entre diferentes capas.
	- `interface/` → Probablemente define contratos entre capas.
### **🔹¿Por qué?**

*  **Separa responsabilidades claramente**: Presentación, Aplicación, Dominio y Datos.
*  **Sigue principios SOLID**: Cada módulo es independiente y desacoplado.
* **Fácil mantenimiento y escalabilidad**: Cambiar la base de datos o la API sin afectar la lógica de negocio.

Este código esta estructurado de esta forma debido a que sigue la filosofía **Robert Cecil Martin** lo cual es un ingeniero de software, reconocido por desarrollar varios principios de diseño de software.

 _"Si quieres ser un programador productivo esfuérzate en escribir código legible."_
	**-Robert C. Martin**
Para mas información consultar [[Principios de SOLID]]