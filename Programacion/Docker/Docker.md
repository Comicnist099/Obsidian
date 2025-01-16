### Que es Docker?

#### Antes de Docker
Era un problema muy común errores en cuestiones de control de versiones de dependencias de terceros, como también de softwares.

![[Pasted image 20250112191752.png]]

Una solución anterior era el uso de visual machines:
* **El problema es que suelen ser pesadas:** emulamos la capa de aplicaciones y KERNEL del sistema operativo.
* **Lentas**: El cambiarlas, iniciarlas ,ejecutarlas y transferirlas requiere un tiempo especifico para cada maquina virtual creada.
#### Con Docker:
*"Sin dejar basura o configuraciones a medias"*

Con el uso de docker podrás utilizar imágenes que te permiten establecer un estándar en la ejecución del proyecto.

##### Beneficios:
A diferencia de las maquinas virtuales, los contenedores se levantan en milésimas de segundo a unos cuantos segundos.

* Cada contenedor esta aislado de los demás.
* Es posible ejecutar varias instancias de la misma version o diferentes versiones sin configuraciones adicionales.
* Con un comando, puedes descargar, levantar y correr todo lo que necesitas.
* Cada contenedor contiene todo lo que necesita para ejecutarse.
* Indiferente el sistema operativo HOST.
##### Flujo de trabajo
![[Pasted image 20250112192521.png]]

#### [[Conceptos generales Docker]]
#### [[Comandos Docker]]

#### Instalaciones: 

Instalaciones necesarias:https://gist.github.com/Klerith/3f611ff0e5c15b733ac63365ab310a35
Instalación de docker en Linux Ubuntu:https://docs.docker.com/desktop/setup/install/linux/
Instalación manual https://docs.docker.com/engine/install/ubuntu/
