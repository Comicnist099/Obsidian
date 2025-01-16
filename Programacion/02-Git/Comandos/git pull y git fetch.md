## **Git con `git pull` y `git fetch`**
### `git fetch`

- **Función**: Obtiene los cambios (commits, archivos y referencias) de un repositorio remoto y los actualiza en el repositorio local, pero **sin integrarlos en tu rama activa**.
- **Uso típico**: Para inspeccionar y revisar los cambios remotos antes de fusionarlos.
- **Efecto**: Actualiza el origen remoto en tu repositorio local (e.g., `origin/main`).
---
### `git pull`

- **Función**: Combina dos comandos: `git fetch` (obtiene los cambios remotos) seguido de un `git merge` (fusiona los cambios en tu rama activa).
- **Uso típico**: Para traer y aplicar directamente los cambios más recientes de un repositorio remoto.
- **Efecto**: Actualiza tu rama activa con los cambios remotos.
---
### Lista de comandos
* **Descarga cambios recientes del repositorio remoto.**
```powershell
git fetch
```
* **Combina los cambios del repositorio remoto con la rama actual.**
```powershell
git pull 
```
