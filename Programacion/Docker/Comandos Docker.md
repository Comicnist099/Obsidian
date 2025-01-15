### Container

*  **Permite ver los contenedores activos:**
```powershell
docker container ls
```
	ó
```powershell
docker container ps
```
* `docker container ls -a`: Permite ver todos los contenedores.
* `docker container prune`: Elimina todos los contenedores que no están ejecutados.
* `docker container rm <idContainer>`:Elimina contenedores específicos.
* `docker container rm -f <idContainer>`:Elimina contenedores específicos de manera forzada.
* `docker container run <nameContainer>`: Permite ejecutar un contenedor.
* `docker container run -d -p 80:80 docker/getting-started`:Correr un servidor en el localhost.
* `docker container run -d -p <numberPort>:80 docker/getting-started`:Correr un servidor en el localhost.
* `docker container run ^` : el símbolo *^* permite dar un salto de linea y seguir colocando código a continuación sin que todo este en la misma linea.
* `docker container run --name <name>`: Esto lo que hace es colocarle el nombre al contenedor que se creara.
* `docker container run -e POSTGRES_PASSWORD=<password>`:En este caso el simbolo *-e* se representa como variable de entorno y se esta igualando la variable de entorno a un valor.

### Image
* `docker pull <nameImage>`:Permite descargar una imagen.
* `docker image rm <idImage>`: Elimina una imagen en especifico.
* `docker image ls` o `docker images` : Ver el listado de imágenes.

### Logs
* `docker logs -f <idContainer>`: Te permite ver en tiempo real ver los logs y errores del mismo.
