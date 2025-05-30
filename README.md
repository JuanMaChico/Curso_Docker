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

---

# Backend App con Docker y MongoDB

Este proyecto es una API REST básica construida con **Node.js**, **Express** y **MongoDB**, preparada para ejecutarse en contenedores Docker usando **Docker Compose**.

## Estructura del Proyecto

```
.
├── backend_App/         # Código fuente del backend (Node.js + Express)
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── db/                  # Configuración adicional de Docker Compose para la base de datos (opcional)
├── docker-compose.yml   # Orquestador principal de servicios
└── README.md
```

## ¿Qué hace este proyecto?

- Expone una API REST en `/api/users` para gestionar usuarios (crear y listar).
- Utiliza MongoDB como base de datos.
- Todo el entorno se levanta fácilmente con Docker Compose.

## Endpoints principales

- `GET /api/users` — Lista todos los usuarios.
- `POST /api/users` — Crea un nuevo usuario (requiere JSON con `name`, `email`, `age`).

## ¿Cómo levantar el proyecto?

1. **Clona el repositorio**  
   ```bash
   git clone <https://github.com/JuanMaChico/Curso_Docker.git>
   cd Curso_Docker
   ```

2. **Levanta los servicios con Docker Compose**  
   ```bash
   docker-compose up -d
   ```

   Esto levantará dos contenedores:
   - `mongodb_container`: Base de datos MongoDB.
   - `backend_app_container`: API Node.js conectada a MongoDB.

3. **Accede a la API**  
   La API estará disponible en [http://localhost:5000/api/users](http://localhost:5000/api/users).

## Variables de entorno

Las variables de entorno principales ya están definidas en el `docker-compose.yml`:

- `MONGO_URI`: Cadena de conexión a MongoDB.
- `PORT`: Puerto donde corre la API (por defecto 5000).

## Comandos útiles

- **Ver logs de los servicios**
  ```bash
  docker-compose logs
  ```
- **Detener los servicios**
  ```bash
  docker-compose down
  ```

## Recursos útiles

- [Documentación oficial de Docker](https://docs.docker.com/)
- [Documentación oficial de PM2](https://pm2.keymetrics.io/)

---

**Autor:**  
[[JuanMaChico](https://github.com/JuanMaChico/Curso_Docker.git)]
