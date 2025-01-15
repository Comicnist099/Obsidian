Hay 3 tipos de volúmenes, son usados para hacer persistencia la data entre reinicios y levantamiento de imágenes.

### Named Volumes
Este es el volumen mas usado

*  Crear un nuevo volumen:
```vim
		docker volume create <nameVolume>
```
	
*  Listar los volúmenes creados:
		`docker volume ls`
	
* Inspeccionar el volumen especifico.
		`docker volume inspect <nameVolume>`
	
* Remueve todos los volumenes no usados 