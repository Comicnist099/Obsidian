## **Configuración de Git con `git diff`**:
Se utiliza para mostrar las diferencias entre los archivos de tu repositorio en comparación con el estado actual, el área de _stage_ o entre diferentes commits.

---
### Lista de Comandos:
- **Muestra las diferencias entre el directorio de trabajo y el área de _stage_:**
```powershell
git diff
```
- **Muestra las diferencias entre el área de _stage_ y el último commit:**
```powershell
git diff --staged
```
* **Muestra las diferencias entre dos commits:**
```powershell
git diff <commit1> <commit2>
```
 * Muestra las diferencias entre dos ramas.
 ```powershell
 git diff <rama1> <rama2>
 ```
- **Muestra las diferencias en un archivo específico:**
```powershell
git diff <archivo>
``` 
- **Muestra un resumen de las diferencias sin detalles completos:**
```powershell
git diff --stat
```