*"Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben dependen de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones"*
**-Robert C. Martin**

* Los módulos de alto nivel no deberían  depender de módulos de bajo nivel.
* Ambos deberían depender de abstracciones.
* Las abstracciones no deberían depender de detalles.
* Los detalles deberían depender de abstracciones.

Los componentes mas importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir la capa de dominio.

Los menos importantes son los que están próximos a la infraestructura, es decir aquellos relacionados con la UI, la persistencia , la comunicación con API externa, etc. 
![[Pasted image 20250112045453.png]]
Las capas no deberían ser afectadas si hay un cambio de dependencias y el problema debería ser trivial.
Ejemplo: 
* Si se cambia un formato 'json' a un 'xml'.
* Se cambia SQL a MongoDB.

Es necesario contralar las dependencias de terceros y tener un control al cambio.

#### Depender de abstracciones
Nos estamos refiriendo a clases abstractas o interfaces.

**Uno de los motivos mas importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.**

#### Porque obtenemos este beneficio
Cada cambio es un componente abstracto implica un cambio en su implementación.

Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa.

#### Inyección de dependencia
Dependencia en programación, significa que un modulo o componente requiere de otro pa poder realizar su trabajo.

En algún momento nuestro programa o aplicación llegara a estar formado por mucho módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.