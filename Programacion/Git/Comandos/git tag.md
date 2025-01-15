## **Git con `git tag`**
Se utiliza para crear, listar, eliminar y administrar _tags_ en un repositorio Git. Los _tags_ son referencias que apuntan a un commit específico y se usan, generalmente, para marcar puntos importantes en la historia del repositorio, como versiones de software.
### Lista de Comandos:
* **Crea un tag en el commit actual:**
```powershell
git tag <nombre>
```
* **Crea un tag anotado con un mensaje:**
```powershell
git tag -a <nombre> -m "<mensaje>
```
```powershell
git tag -a v1.0.0 -m "Version 1.0.0 lista"
```
* **Crea un tag en un commit pasado especificado por el hash:**
```powershell
git tag -a <nombre> <hash> -m "<mensaje>
```
```powershell
git tag -a v0.1.0 <hash>-m "Version Alpha de nuestra app
```


