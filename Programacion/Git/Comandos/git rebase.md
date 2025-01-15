## **Git con `git log`**
Reorganiza los commits de una rama para aplicarlos sobre otra base, reescribiendo su historial.
### Lista de Comandos:
- **Reorganiza los commits de la rama actual en la parte superior de la rama `master`:**
```powershell
git rebase master
```

* **Muestra una lista interactiva para reordenar o modificar los últimos  _n_ commits:**
	*  Presionar `a` para editar configuraciones.
        
	 * Presionar `ESC` y escribir `:q!` para salir sin guardar cambios. y `:wq!` es para guardar los cambios y salir
```powershell
git rebase -i HEAD~<numero>
```

<span style="color:orange">Representación visual del uso del rebase:</span>
	![[01-Visualizacion git rebase.png]]
    
