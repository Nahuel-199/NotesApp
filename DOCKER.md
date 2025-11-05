# 📝 NotesApp

Aplicación moderna en **Next.js + Chakra UI + Redux Toolkit + GSAP** para guardar, buscar y editar tus frases favoritas.

Incluye animaciones suaves, modo oscuro/claro y persistencia local de datos.  
Ahora también lista para levantarse con **Docker + pnpm** 🚀.

---

## ⚡️ Características

- 🧠 **React + Next.js (App Router)**  
- 💜 **Chakra UI** para un diseño moderno y responsive  
- 🔄 **Redux Toolkit** para gestión global del estado  
- 🧩 **GSAP** para animaciones suaves  
- 💾 **Persistencia local** con `localStorage`  
- 🐳 **Docker-ready** con `pnpm` como gestor de paquetes  

---

## 🛠️ Requisitos

Antes de empezar, asegurate de tener instalado:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- (opcional) [pnpm](https://pnpm.io/installation) si querés correrlo fuera de Docker

---

## 🚀 Levantar el proyecto con Docker

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Nahuel-199/NotesApp.git
cd NotesApp
```

### 2️⃣ Construir y ejecutar el contenedor

```bash
docker-compose up --build
```

Esto:
- Construye la imagen usando el `Dockerfile`
- Instala dependencias con **pnpm**
- Ejecuta el servidor Next.js en modo producción

### 3️⃣ Abrir en tu navegador
👉 [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Estructura de archivos relevante

```
📦 NotesApp
 ┣ 📁 src
 ┃ ┣ 📁 app
 ┃ ┣ 📁 components
 ┃ ┣ 📁 store
 ┃ ┗ 📁 styles
 ┣ 📄 Dockerfile
 ┣ 📄 docker-compose.yml
 ┣ 📄 package.json
 ┣ 📄 pnpm-lock.yaml
 ┗ 📄 README.md
```

---

## 🧱 Configuración del contenedor

### 📄 Dockerfile

```dockerfile
FROM node:20-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### 📄 docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    container_name: notes_app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
      - /app/node_modules
    restart: always
```

---

## 🧰 Comandos útiles

| Acción | Comando |
|--------|----------|
| 🏗️ Construir y ejecutar | `docker-compose up --build` |
| ⏹️ Detener contenedores | `docker-compose down` |
| 🔍 Ver logs | `docker logs notes_app -f` |
| ♻️ Reconstruir sin cache | `docker-compose build --no-cache` |

---

## 🧩 Ejecutar sin Docker (opcional)

Si preferís usar tu entorno local:

```bash
pnpm install
pnpm run dev
```

y luego abrí [http://localhost:3000](http://localhost:3000)

---

## 🧠 Autor

**👨‍💻 Nahuel Cernadas**  
💼 Desarrollador Frontend  
🌐 [GitHub @Nahuel-199](https://github.com/Nahuel-199)