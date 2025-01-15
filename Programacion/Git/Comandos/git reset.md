## **Git con `git reset`**
Se utiliza para deshacer cambios en el repositorio de diferentes maneras. Dependiendo de los parámetros que se utilicen, **`git reset`** puede afectar el área de _stage_, los commits, o incluso el directorio de trabajo.
### Lista de Comandos:
* **Remueve un archivo del área de stage.**
```powershell
git reset <archivo>
```
* **Revierte el último commit manteniendo los cambios en el área del stage:**
```powershell
git reset --soft HEAD^
```
* **Restablece el repositorio al estado de la clave única de un commit, revirtiendo los cambios anteriores:**
```powershell
git reset --hard <clave>
```    
