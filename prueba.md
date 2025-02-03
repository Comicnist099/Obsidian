**Generar cliente Prisma y migrar la base de datos:**
```powershell
npx prisma migrate dev --name init 
npx prisma generate
```
.env
```ts
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"
```

![[Pasted image 20250122165607.png]]
_El éxito depende del fracaso desde el cual se le mire._
● Configuración de backups



Inventory



