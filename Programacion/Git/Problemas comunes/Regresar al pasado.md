### Instrucciones:

1. **Revisa el historial de commits:** Para identificar el commit al que deseas volver, utiliza [[git log]] esto te mostrará el historial de commits. Copia el hash (los primeros caracteres suelen ser suficientes) del commit al que deseas volver.
2. **Revertir al commit específico:** Usa el comando [[git reset]] para mover el estado actual del repositorio a ese commit.
    - **Para un cambio completo (afectará tu historial):**    
	    Esto borrará todos los cambios posteriores en tu árbol de trabajo y en el índice.     
```powershell 
git reset --hard <commit-hash>        
```
           
**Si solo quieres resetear el índice y el árbol de trabajo (sin alterar historial):**
```powershell
git reset --soft <commit-hash>
```
        
3. **Hacer un push al repositorio remoto:** Si usaste `git reset --hard`, tendrás que forzar el push porque el historial remoto ya no coincidirá con tu historial local:
	```powershell
git push origin <branch-name> --force
	```    
