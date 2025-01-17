## **Singleton**
En un ingeniero de software, el patrón singleton es un patrón de diseño de software que restringe la instanciación de una clase a una instancia _"única"_. Esto es útil cuando se necesita exactamente un objeto para coordinar acciones en todo el sistema.

Realmente **Singleton** no es el problema. el problema es cuando aplicamos mal este patrón y lo usamos en todas partes.

---
### Ventajas:
* Garantiza una única instancia de la clase a lo largo de toda la aplicación. 
---
### Desventajas:
* Vive en el contexto global.
* Puede ser modificado por cualquiera y en cualquier momento.
* No es rastreable.
* Difícil de testar debido a su ubicación.
---
### Ejemplo
Consulta el [[02-Singleton-Ejemplo]] para poder aprender mas a detalles de la lógica aplicada.