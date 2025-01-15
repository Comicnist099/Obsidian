## **Configuración de Git con `git commit`**
Se utiliza para crear un nuevo "commit" o registro de los cambios en el repositorio, lo que guarda de manera permanente los archivos que han sido añadidos al área de _stage_.
### Lista de Comandos:
* **Crea un registro histórico de los archivos agregados:**
```powershell
git commit -m "<mensaje>"
```
* **Agrega todos los cambios y crea un commit en un solo paso:**
```powershell
git commit -am "<mensaje>" 
```
* **Modifica el mensaje del último commit:**
```powershell
git commit --amend -m "<mensaje>" 
```
    