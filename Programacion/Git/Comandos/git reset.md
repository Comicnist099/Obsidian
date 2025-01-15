##### *Descripción*:
Se utiliza para deshacer cambios en el repositorio de diferentes maneras. Dependiendo de los parámetros que se utilicen, **`git reset`** puede afectar el área de _stage_, los commits, o incluso el directorio de trabajo.
##### Lista de Comandos:
- `git reset <archivo>`: Remueve un archivo del área de stage.
    
- `git reset --soft HEAD^`: Revierte el último commit manteniendo los cambios en el área del stage.
    
- `git reset --hard <clave>`: Restablece el repositorio al estado de la clave unica de un commit, revirtiendo los cambios anteriores.
    