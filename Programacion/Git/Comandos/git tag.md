##### *Descripción*:
Se utiliza para crear, listar, eliminar y administrar **tags** en un repositorio Git. Los **tags** son referencias que apuntan a un commit específico y se usan, generalmente, para marcar puntos importantes en la historia del repositorio, como versiones de software.
##### Lista de Comandos:
- `git tag <nombre>`: Crea un tag en el commit actual.
    
- `git tag -a <nombre> -m "<mensaje>`: Crea un tag anotado con un mensaje.
	- Ejemplo: `git tag -a v1.0.0 -m "Version 1.0.0 lista"`
    
- `git tag -a <nombre> <hash> -m "<mensaje>`: Crea un tag en un commit pasado especificado por el hash.
	- Ejemplo:`git tag -a v0.1.0 <hash>-m "Version Alpha de nuestra app"` 

