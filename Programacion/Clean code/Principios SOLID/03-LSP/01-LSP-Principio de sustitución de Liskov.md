## **LSP-Principio de sustitución de Liskov**
El nombre se le debe a la Doctora Barbara Jane Huberman, mas conocida como Barbara Liskov. Gano el premio Turin Award por contribuciones a los fundamentos prácticos y teóricos del lenguaje de programación y el diseño de sistemas, especialmente relacionados con la atracción de datos, la tolerancia a fallas y la computación distribuida. 

El principio de Liskov nos da una serie de pautas para guiar la herencia entre clases. La principal que debe cumplir si estamos realizando la herencia de una manera correcta es que cada clase que hereda de otra puede usarse como su padre sin necesidad de conocer las diferente entre ellas.

**Si cuando sobre escribimos un método en la clase que hereda necesitamos lanzar una excepción o no realizar nada, entonces probablemente estamos violando el *LSP* **

---
### Resumidamente
* *"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar la propiedades del sistema"*.
ó
* *"Si una clase A que es extendida por una clase B deberíamos ser capaces de sustituir cualquier instancia de A por cualquier objeto de B sin que el sistema deje de funcionar o se presenten comportamientos inesperados". *

---
#### Frase
*"Las funciones que utilice punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo"*
**-Robert C. Martin**

---
### Ejemplo
Consulta el [[02-LSP-Ejemplo]] para poder aprender mas a detalles de la lógica aplicada.
