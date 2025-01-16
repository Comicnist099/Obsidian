*"Nunca debería haber mas de un motivo por el cual cambiar una clase o un modulo"*
**-Robert C. Martin** <span>

**Tener una única responsabilidad !== "Hacer una sola cosa"**
#### Como detectar violaciones de responsabilidad única

* Nombre de clases y módulos demasiado genéricos hace que pueda que una clase haha que tenga mas responsabilidades de las que necesita.
* Cambios en el código suele afectar la clase o modulo, si tiene alto acoplamiento.
* La clase involucra multiples capas.  
* Numero elevado de importaciones.
* Cantidad elevada de métodos públicos.
* Excesivo numero de líneas de código.