##### *Descripción*:
Permite guardar temporalmente los cambios que has realizado en el repositorio sin comprometerlos en un commit.
##### Lista de Comandos:
- `git stash`: Guarda los cambios actuales sin realizar un commit.
    
- `git stash list`: Muestra la lista de _stashes_ almacenados.
    
- `git stash apply <stashNombre>`: Aplica los cambios de un stash específico.
    
- `git stash pop`: Aplica el último stash y lo elimina de la lista.
    
- `git stash clear`: Elimina todos los _stashes_.
    
- `git stash drop <stashNombre>`: Elimina un stash específico.
    
- `git stash show <stashNombre>`: Muestra los detalles de un stash.
    
- `git stash save "<descripción>`: Agrega una descripción a un nuevo stash.
    
- `git stash list --stat`: Muestra detalles adicionales de los stashes almacenados.