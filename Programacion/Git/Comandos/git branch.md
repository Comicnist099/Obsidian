##### *Descripción*:
Se utiliza para trabajar con las ramas (branches) en un repositorio Git. Las ramas son una característica fundamental en Git que permiten trabajar de manera independiente en diferentes versiones del proyecto.
##### Lista de Comandos:
- `git checkout -- .`: Restablece todos los archivos al último estado registrado.
    
- `git branch -a`: Lista todas las ramas (locales y remotas).

- `git branch <nombre-de-rama>`: Crea una nueva rama.

- `git branch -m <nombre-antiguo> <nombre-nuevo>`: Renombra una rama.

- `git branch -d <nombre-de-rama>`: Elimina una rama local.

- `git branch -D <nombre-de-rama>`: Elimina una rama local forzosamente.

- `git branch -r`: Lista las ramas remotas.

- `git checkout -b <nombre-de-rama>`: Crea y cambia a una nueva rama.

- `git switch -c <nombre-de-rama>`: Crea y cambia a una nueva rama (alternativa a `git checkout`).

- `git remote prune origin`: Elimina referencias a ramas remotas eliminadas.