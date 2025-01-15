## **Configuración de Git con `git branch`**
Se utiliza para trabajar con las ramas (branches) en un repositorio Git. Las ramas son una característica fundamental en Git que permiten trabajar de manera independiente en diferentes versiones del proyecto.
### Lista de Comandos:
* **Restablece todos los archivos al último estado registrado:**:
```powershell
git checkout -- . 
```
* **Lista todas las ramas (locales y remotas):**
```powershell
`git branch -a`
```
* **Crea una nueva rama:**
```powershell
git branch <nombre-de-rama> 
``` 
* **Renombra una rama:**
```powershell
git branch -m <nombre-antiguo> <nombre-nuevo>
```
* **Elimina una rama local:**
```powershell
git branch -d <nombre-de-rama> 
```
* **Elimina una rama local forzosamente:**
```powershell
git branch -D <nombre-de-rama>
```
* **Lista las ramas remotas:**
```powershell
git branch -r
```
* **Crea y cambia a una nueva rama:**
```powershell
git checkout -b <nombre-de-rama> 
```
* **Crea y cambia a una nueva rama (alternativa a `git checkout`):**
```powershell
git switch -c <nombre-de-rama>
```
* **Elimina referencias a ramas remotas eliminadas:**
```powershell
git remote prune origin
```
