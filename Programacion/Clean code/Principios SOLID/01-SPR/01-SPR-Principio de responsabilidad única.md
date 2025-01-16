## **SPR-Principio de responsabilidad única**
El principio de responsabilidad única establece que una clase debe debe tener una única razón para cambiar. En otras palabras, *una clase debe tener una sola responsabilidad en el sistema*. Recordar que el **tener una única responsabilidad !== "Hacer una sola cosa"**

---
### ¿Por qué es importante el principio de responsabilidad única?
La importancia de _SPR_ radica en su capacidad para mantener el código limpio y bien organizado. Cuando una clase tiene una sola responsabilidad, es más fácil de probar y de cambiar sin afectar a otras partes del sistema. Esto promueve la modularidad y la reutilización de código, lo que a su vez conduce a un desarrollo más eficiente y a la reducción de errores.

---
### Relación con otros principios SOLID
el _SPR_ esta estrechamente relacionado con otros principios como el [[01-LSP-Principio de sustitución de Liskov]] como también [[ISP- Principio de segregación de la interfaz]]. Estos principios trabajan en conjunto para crear un código limpio y eficiente.

---
### Como detectar violaciones de responsabilidad única
1. Nombre de clases y módulos demasiado genéricos hace que pueda que una clase haha que tenga mas responsabilidades de las que necesita.
2. Cambios en el código suele afectar la clase o modulo, si tiene alto acoplamiento.
3.  La clase involucra multiples capas.  
4.  Numero elevado de importaciones.
5. Cantidad elevada de métodos públicos.
6. Excesivo numero de líneas de código.
---
#### Frase
*"Nunca debería haber mas de un motivo por el cual cambiar una clase o un modulo"*
**-Robert C. Martin** 

---
### Ejemplo
Consulta el [[02-SPR-Ejemplo]] para poder aprender mas a detalles de la lógica aplicada.