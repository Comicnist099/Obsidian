Es un principio que depende mucho del contexto.
Establece que las entidades de software ( clases, módulos ,métodos ,etc.) deben estar abiertas para la extension, pero cerradas para la modificación.

* La forma mas sencilla de demostrar este principio es considerar un método que hace una cosa.![[Pasted image 20250111221223.png]]
* Establecer sistemas tolerantes al cambio![[Pasted image 20250111221257.png]]
* Cuando se dice que este cerrado al cambio queremos decir que no hubo ninguna modificación interna que hizo que el comportamiento inicial cambiara y cuando decimos que sea abierto es que tenga posibilidad de cambio sin que el resultado inicial cambie.

El principio de abierto-cerrado también se puede lograr muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patron de estrategia. 

#### Detectar violacionas de OPC

* Cambios normalmente afectan nuestra clase o modulo.
* Cuando una clase modulo afecta muchas capas (Presentación , almacenamiento ,etc.).
