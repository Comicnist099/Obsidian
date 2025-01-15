##### *Descripción*:
Reorganiza los commits de una rama para aplicarlos sobre otra base, reescribiendo su historial.
##### Lista de Comandos:
- `git rebase master`: Reorganiza los commits de la rama actual en la parte superior de la rama `master`.
    
- `git rebase -i HEAD~<numero>`: Muestra una lista interactiva para reordenar o modificar los últimos  _n_ commits.
    - Presionar `a` para editar configuraciones.
        
    - Presionar `ESC` y escribir `:q!` para salir sin guardar cambios. y `:wq!` es para guardar los cambios y salir

	Al realizar el rebase se podra ver de esta forma 
	![[Pasted image 20241231011833.png]]
    
