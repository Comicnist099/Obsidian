## **Git con `git log`**
Se utiliza para ver el historial de commits en un repositorio Git.
### Lista de Comandos:
- **Muestra el historial de commits:**
```powershell
git log
```
* **Muestra un resumen de los commits en una sola línea.**
```powershell
git log --oneline
```
* **Muestra el historial con una representación gráfica de las ramas:**
```powershell
git log --graph
```
* **Muestra estadísticas de cambios (líneas modificadas) en cada commit:**
```powershell
git log --stat
```
* **Muestra solo los últimos N commits.**
```powershell
git log -n <number>
```
* **Muestra el historial de un archivo específico:**
```powershell
git log <archivo>
```
- **Muestra los commits desde una fecha:**
```powershell
git log --since="fecha"
```
- **Muestra los cambios detallados de cada commit:**
```powershell
git log -p
```
- **Muestra un registro de los movimientos históricos del repositorio:**
```powershell
git reflog 
```