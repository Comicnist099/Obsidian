### Container
* **Permite ver los contenedores activos:**
```powershell
docker container ls
``` 
 o 
```powershell
docker container ps
```
* **Permite ver todos los contenedores:**
```powershell
docker container ls -a
```
* **Elimina todos los contenedores que no están ejecutados:**
```powershell
docker container prune
```
* **Elimina contenedores específicos:**
```powershell
docker container rm <idContainer>
```
* **Elimina contenedores específicos de manera forzada:**
```powershell
docker container rm -f <idContainer>
```
* **Permite ejecutar un contenedor.**
```powershell
docker container run <nameContainer>
```
* **Correr un servidor en el localhost:**
```powershell
docker container run -d -p 80:80 docker/getting-started
```
* Correr un servidor en el localhost:
```powershell
docker container run -d -p <numberPort>:80 docker/getting-started
```
* **El símbolo *^* permite dar un salto de linea y seguir colocando código a continuación sin que todo este en la misma linea:**
```powershell
docker container run ^
```
* **Esto lo que hace es colocarle el nombre al contenedor que se creara:**
```powershell
docker container run --name <name>
```
* **En este caso el símbolo *-e* se representa como variable de entorno y se esta igualando la variable de entorno a un valor:**
```powershell
docker container run -e POSTGRES_PASSWORD=<password>
```
=======
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
* **Permite descargar una imagen:**
```powershell
docker pull <nameImage>
```
* **Elimina una imagen en especifico:**
```powershell
`docker image rm <idImage>`: 
```
* **Ver el listado de imágenes:**
```powershell
docker image ls 
```
* o 
```powershell
docker images
```
### Logs
* **Te permite ver en tiempo real ver los logs y errores del mismo:**
```powershell
docker logs -f <idContainer>
```
