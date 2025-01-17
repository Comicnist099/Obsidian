## **Código no probable**
En pocas palabras son se trata de código difícilmente testeable. La importancia de los test, en muchos casos, es minimizado atribuyendo que este aumenta el tiempo de desarrollo, los test nos proporcionan muchos beneficios.

---
### ¿Que hace que el código no sea probable?
* Código con [[01-Tight Coupling|alto acoplamiento]].
* Código con muchas dependencias no inyectadas.
* Dependencias en el contexto global (Tipo [[01-Singleton|Singleton]]).
---
**Debemos de tener en mente las pruebas desde la creación del código.**
![[Pasted image 20250111035658.png]]

---
### Nota final
Es importante escribir código que sea fácilmente _"testeable"_ imaginen que el código que escriben hoy, será refactorizado por alguien más.
