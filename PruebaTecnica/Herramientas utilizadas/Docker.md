## ⬛Docker
Docker es una herramienta que permite crear, desplegar y ejecutar aplicaciones en contenedores, proporcionando un entorno de ejecución aislado y consistente. Su importancia radica en varios beneficios clave:
### 🔹1. **Portabilidad**
- Los contenedores incluyen todo lo necesario para ejecutar una aplicación, lo que garantiza que funcionará de la misma manera en cualquier entorno (desarrollo, pruebas, producción).

### 🔹2. **Consistencia y Reproducibilidad**
- Evita el problema de _"en mi máquina funciona"_, ya que todos los entornos son idénticos.
- Se pueden definir entornos con `Dockerfile` y `docker-compose.yml`, asegurando configuraciones replicables.

### 🔹3. **Escalabilidad**
- Facilita el escalado horizontal mediante la orquestación con herramientas como Docker Swarm o Kubernetes.
- Se pueden desplegar múltiples instancias de una aplicación fácilmente.

### 🔹4. **Eficiencia en el Uso de Recursos**
- Comparado con las máquinas virtuales, los contenedores son más livianos y arrancan más rápido porque comparten el kernel del sistema operativo.

### 🔹5. **Facilidad de Integración y Automatización**
- Compatible con CI/CD, permitiendo la automatización de despliegues.
- Se integra con herramientas como GitHub Actions, GitLab CI/CD, y Jenkins.

### 🔹6. **Seguridad y Aislamiento**
- Los contenedores ejecutan aplicaciones de forma aislada, evitando conflictos entre dependencias.
- Se pueden aplicar políticas de seguridad para limitar acceso y privilegios.
### 🔹7. **Conclusión**
En este caso, dado que se utilizaran herramientas **Node.js, Prisma ORM y TypeScript**, Docker permitirá:  

✅ Crear entornos consistentes para desarrollo y producción.  
✅ Definir contenedores para tu API, base de datos y herramientas adicionales.  
✅ Ejecutar pruebas de carga en un servicio separado sin afectar otros contenedores.

Para mas información entrar a [[Programacion/03-Docker/Docker|Docker]]