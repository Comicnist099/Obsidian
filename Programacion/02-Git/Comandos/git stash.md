## **Git con `git stash`**
Permite guardar temporalmente los cambios que has realizado en el repositorio sin comprometerlos en un commit.

---
### Lista de Comandos:
* **Guarda los cambios actuales sin realizar un commit:**
```powershell
git stash
```
* **Muestra la lista de _stashes_ almacenados:**
```powershell
git stash list
```
* **Aplica los cambios de un stash específico:**
```powershell
git stash apply <stashNombre>
```
* **Aplica el último stash y lo elimina de la lista:**
```powershell
git stash pop
```
* **Elimina todos los _stashes_:**
```powershell
git stash clear
```
* **Elimina un stash específico:**
```powershell
git stash drop <stashNombre>
```
* **Muestra los detalles de un stash:**
```powershell
git stash show <stashNombre> 
```
* **Agrega una descripción a un nuevo stash:**
```powershell
git stash save "<descripción>"
```
* **Muestra detalles adicionales de los stashes almacenados:**
```powershell
git stash list --stat
```