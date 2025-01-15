## **Descripción**:
Son comandos personalizados que puedes crear para simplificar o abreviar las secuencias de comandos que usas con frecuencia. En lugar de escribir un comando largo y complejo, puedes definir un alias más corto y fácil de recordar.
### Lista de Comandos:
- **Mejor manera de ver los logs el comando ahora es `git lg`**
 ```powershell
git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```
- **Mejor manera de ver los status el comando es `git s`**
```powershell
git config --global alias.s "status --short -b"
```