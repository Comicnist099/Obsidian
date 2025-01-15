##### *Descripción*:
Se utiliza para configurar opciones y preferencias en Git. A través de **`git config`**, puedes ajustar configuraciones globales o locales 
##### Lista de Comandos:

- `git config --global -e`: Ver y editar configuraciones globales de Git.
    - Presionar `a` para editar configuraciones.  
        
    - Presionar `ESC` y escribir `:q!` para salir sin guardar cambios. y `:wq!` es para guardar los cambios y salir  
        
- `git config --global pull.ff only`: Configura `git pull` para permitir solo actualizaciones de tipo _fast-forward_.  
    
- `git config --global pull.rebase true`: Habilita el modo _rebase_ automáticamente cuando ocurre un conflicto.  
    
- `git config --list --show-origin`: Muestra las configuraciones activas y sus ubicaciones de origen.  
    
- `git config --global init.defaultBranch <nombre>`: Cambia el nombre por defecto de la rama principal, por ejemplo, de `master` a `main`.  
    
- `git config core.autocrlf true`: Elimina las advertencias relacionadas con saltos de línea (_CRLF_).  
    
- `git config --global alias.<alias> <"command">`: Crea un alias para un comando de Git.

Consulta [[Alias git]] para mas configuraciones.