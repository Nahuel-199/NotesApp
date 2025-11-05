# 🧠 Quotes App — Challenge React

Una aplicación moderna desarrollada en **Nextjs + React + Redux Toolkit + Chakra UI**, que permite crear, editar, eliminar y filtrar frases de manera interactiva, con una interfaz limpia, animaciones suaves y persistencia local.

> 💬 *“Tu colección de frases, guardadas para inspirarte cada día.”*

---

## 🚀 Características principales

- 📝 **Agregar frases** — Crea nuevas frases de forma rápida.
- 🔍 **Filtrado en tiempo real** — Busca frases a medida que escribís.
- 🗑️ **Eliminar con confirmación** — Elimina frases con un diálogo de confirmación elegante.
- ✏️ **Edición inline** — Editá frases existentes desde un modal.
- 💾 **Persistencia local (LocalStorage)** — Tus frases se guardan automáticamente en tu navegador.
- 🌓 **Modo oscuro/claro** — Integrado con `next-themes` y `Chakra UI`.
- 🧩 **Animaciones fluidas** — GSAP aplicado para efectos de entrada en las cards.
- 📱 **Diseño responsive** — Adaptado a pantallas móviles, tablets y escritorio.

---

## 🧰 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| ⚛️ **React 19** | Biblioteca principal para construir la interfaz. |
| 🧭 **Next.js (App Router)** | Framework para SSR/SSG y estructura moderna. |
| 🎨 **Chakra UI** | Librería de componentes accesibles y personalizables. |
| 🪄 **GSAP** | Librería de animaciones para transiciones suaves. |
| 🧱 **Redux Toolkit** | Manejo de estado global y persistencia local. |
| 💅 **next-themes** | Control de modo oscuro/claro. |
| 🧑‍💻 **TypeScript** | Tipado estático para mayor robustez. |

---

## 📂 Estructura del proyecto

```
src/
 ├─ app/
 │   ├─ page.tsx              # Página principal
 │   ├─ layout.tsx            # Layout general
 ├─ components/
 │   ├─ CardGrid.tsx          # Grilla principal de frases
 │   ├─ QuoteCard.tsx         # Card individual con animaciones
 │   ├─ AddQuoteDialog.tsx    # Modal para agregar nueva frase
 │   ├─ EditQuoteDialog.tsx   # Modal para editar frase existente
 │   ├─ DeleteQuoteDialog.tsx # Confirmación de borrado
 ├─ store/
 │   ├─ index.ts              # Configuración del store de Redux
 │   ├─ quotesSlice.ts        # Lógica principal de manejo de frases
 ├─ components/ui/
 │   ├─ componentes de chakra-ui        # Proveedor de tema claro/oscuro
 ├─ styles/
 │   └─ globals.css           # Estilos globales
```

---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Nahuel-199/NotesApp.git
   cd notesapp
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```
   o con Yarn:
   ```bash
   yarn
   ```

3. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```
   La aplicación estará disponible en 👉 `http://localhost:3000`

4. **Build de producción**
   ```bash
   pnpm build
   pnpm start
   ```

---

## 🧭 Funcionamiento del estado global

La app utiliza **Redux Toolkit** para manejar el estado de las frases (`quotesSlice.ts`), que guarda y sincroniza la información con **LocalStorage**:

- Al agregar o eliminar frases → se actualiza el estado y el localStorage.
- Al iniciar la app → se cargan las frases persistidas automáticamente.
- Los filtros se aplican localmente y de manera instantánea.

---

## ✨ UI y Animaciones

- Cada tarjeta se anima con **GSAP** al renderizarse.
- Los modales y diálogos usan **Chakra UI** para consistencia visual.
- El tema (oscuro/claro) se maneja con **next-themes** y Chakra.

---

## 🧪 Posibles mejoras futuras

- 🔗 Sincronización con base de datos (por ejemplo, MongoDB).
- 👥 Autenticación de usuario.
- 💬 Compartir frases en redes sociales.
- 💻 API REST/GraphQL para persistencia real.
- 🔔 Notificaciones o recordatorios diarios de frases inspiradoras.

---

## 🖋️ Autor

Desarrollado por **Nahuel Cernadas**  
📧 [gabrielnahuel96gmail.com]  
💼 [LinkedIn](https://www.linkedin.com/in/nahuel-cernadas-3b111a1b7/) — [GitHub](https://github.com/Nahuel-199)
