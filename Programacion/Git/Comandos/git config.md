## **Git con `git config`**

Con **`git config`**, puedes ajustar configuraciones globales o locales para personalizar Git a tu gusto.

---
### Lista de comandos
- **Editar configuraciones globales**
    ```
    git config --global -e
    ```
    Presiona `a` para editar. Usa:
    - `:q!` para salir sin guardar.
    - `:wq!` para guardar y salir.
- **Configurar `git pull` para solo actualizaciones _fast-forward_:**
	```powershell
	git config --global pull.ff only
	```
- **Habilitar rebase automático en conflictos:**
	```powershell
	git config --global pull.rebase true
	```
- **Mostrar configuraciones activas y sus ubicaciones:**
	```powershell
	git config --list --show-origin
	```
- **Cambiar el nombre predeterminado de la rama principal:**
	```powershell
	git config --global init.defaultBranch <nombre>
	```
- **Eliminar advertencias de saltos de línea (_CRLF_):**
	```powershell
	git config core.autocrlf true
	```
- **Crear un alias para un comando de Git:**
	```powershell
	git config --global alias.<alias> <"command">
	```
#### Para mas información referente a alias consultar [[Alias git]]