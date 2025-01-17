## **Alto acoplamiento**
El alto acoplamiento se trata de la implementación de nuestro código es fuertemente acoplado y no es tolerante a cambios. Lo ideal es tener un bajo acoplamiento y buena cohesión.

---
### ¿Qué es el Acoplamiento?
Se refiere a cuando relacionado o dependientes son dos clases o módulos entre si.
* **En bajo acoplamiento** provoca que al cambiar algo importante una clase no debería afectar a la otra.
* **En alto acoplamiento** dificultaría el cambio y el mantenimiento del código: dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

**Un buen diseño de software tiene alta cohesion y bajo acoplamiento**
###### Ejemplo de alto acoplamiento y bajo acoplamiento
![[Pasted image 20250110180708.png]]

---
### ¿Qué es la Cohesión?
Lo ideal es tener bajo acoplamiento y buena cohesión:
* La cohesion se refiere a lo que la clase (o modulo) puede hacer.
* La baja cohesion significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
* Alta cohesion significa que la clase se enfoca en lo que debería estar haciendo solo métodos relacionados con la intension de la clase.
##### *Ejemplo ideal de buena cohesión:*
Donde todo lo relacionado entre si este estrechamente relacionado y cuando se quiera tener una relación solo haya una salida que permita comunicarse entre si.
![[Pasted image 20250110175909.png]]

---
### Desventajas de tener alto acoplamiento
* Un cambio en un módulo por lo general provoca un efecto domino de cambios en otros módulos.
* El ensamblaje de módulos puede requerir mas esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
* Un modulo en particular puede ser mas difícil de reutilizar y/o probar porque se deben incluir módulos independientes.

---
### Posibles soluciones:
interpretar a *"A"* y *"B"* como clases.
 * ***"A"*** tiene un atributo que se refiere a ***"B"***.
 * ***"A"*** llama a los servicios de un objeto ***"B"***.
 * ***"A"*** tiene un método que hace referencia a ***"B"*** (a través del tipo de retorno o parámetro).
 * ***"A"*** es una subclase de (o implementa) la clase ***"B"*** .
![[Pasted image 20250110174749.png]]

---
#### Frase
*"Queremos diseñar componente que sean autocontenidos, auto suficientes e independientes. Con un objetivo y un propósito bien definido."*
**-The Pragmatic Programmer**

### Ejemplo
Consulta el [[02-Tight-Ejemplo]] para poder aprender mas a detalles de la lógica aplicada.