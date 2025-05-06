# Curso_Docker 🐳
🐳_Curso_Docker_🐳

## Comandos básicos de Docker

### Imágenes y contenedores
```bash
# Listar imágenes
docker images

# Descargar una imagen
docker pull <nombre_imagen>

# Crear y ejecutar un contenedor
docker run -d --name <nombre_contenedor> <nombre_imagen>

# Listar contenedores en ejecución
docker ps

# Listar todos los contenedores (incluidos los detenidos)
docker ps -a

# Detener un contenedor
docker stop <nombre_contenedor>

# Eliminar un contenedor
docker rm <nombre_contenedor>

# Eliminar una imagen
docker rmi <nombre_imagen>
```

### Docker Compose
```bash
# Levantar servicios definidos en docker-compose.yml
docker-compose up -d

# Detener servicios
docker-compose down

# Ver logs de los servicios
docker-compose logs
```

---

## Comandos básicos de PM2

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar una aplicación
pm2 start <archivo.js>

# Listar aplicaciones gestionadas por PM2
pm2 list

# Detener una aplicación
pm2 stop <id|nombre>

# Reiniciar una aplicación
pm2 restart <id|nombre>

# Eliminar una aplicación de PM2
pm2 delete <id|nombre>

# Ver logs de una aplicación
pm2 logs <id|nombre>
```

---

## Recursos útiles

- [Documentación oficial de Docker](https://docs.docker.com/)
- [Documentación oficial de PM2](https://pm2.keymetrics.io/)
