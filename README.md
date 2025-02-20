# Sorteo de Amigo Secreto 🎁

Una aplicación web interactiva para realizar sorteos de Amigo Secreto. Este proyecto permite a los usuarios ingresar los nombres de participantes y seleccionar aleatoriamente un Amigo Secreto.

## Características ✨

- **Agregar Participantes**: Los usuarios pueden añadir nombres a través de un campo de texto
- **Validación de Nombres**: 
  - No permite la inscripción de un campo vacío
  - Evita nombres duplicados
  - Restringe entradas que solo contengan números
- **Visualización de los participantes**: Muestra todos los participantes agregados en una lista
- **Sorteo Aleatorio**: Selecciona aleatoriamente un participante de la lista
- **Interactividad**:
  - Soporte para tecla Enter al agregar nombres
  - Desactivación de botones al finalizar el sorteo
- **Reinicio del Juego**: Opción para reiniciar el juego después de un sorteo

## Cómo Usar 🎮

1. **Agregar Participantes**:
   - Escribe un nombre en el campo de entrada
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista de abajo

2. **Sortear un Amigo Secreto**:
   - Agrega al menos 2 participantes
   - Haz clic en "Sortear amigo"
   - El nombre seleccionado se mostrará con un mensaje de celebración

3. **Comenzar de Nuevo**:
   - Después del sorteo, haz clic en "Reiniciar Sorteo"
   - Todos los campos se limpiarán para un nuevo juego

## Detalles Técnicos 🔧

### Estructura del Proyecto
```
├── index.html
├── style.css
└── app.js
```

### Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript

### Funciones Principales
- `agregarAmigo()`: Agrega y valida nuevos participantes
- `sortearAmigo()`: Realiza la selección aleatoria
- `reiniciarJuego()`: Reinicia el estado del juego
- `actualizarListaAmigos()`: Actualiza la lista de visualización

## Instalación 💻

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Abre `index.html` en tu navegador web

## Contribuciones 🤝

Siéntete libre de reportar errores que encuentres en el código, sugerir nuevas funcionalidades, hacer preguntas o discutir mejoras.

## Licencia 📄

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).
