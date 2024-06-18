# React Primer: Guía de Inicio

## Índice

- [React Primer: Guía de Inicio](#react-primer-guía-de-inicio)
  - [Índice](#índice)
  - [Introducción a React](#introducción-a-react)
  - [JSX](#jsx)
  - [SWC y Babel](#swc-y-babel)
    - [SWC](#swc)
    - [Babel](#babel)
  - [Inicializar un Proyecto con Vite](#inicializar-un-proyecto-con-vite)
  - [Usar React sin Dependencias](#usar-react-sin-dependencias)
  - [Crear Componentes](#crear-componentes)
    - [Componente de Clase](#componente-de-clase)
    - [Componente de Función](#componente-de-función)
  - [Estilos en React](#estilos-en-react)
    - [Estilos en Línea](#estilos-en-línea)
    - [Importar CSS](#importar-css)
  - [Props en React](#props-en-react)
    - [Pasando Booleanos y Funciones como Props](#pasando-booleanos-y-funciones-como-props)
    - [Elementos como Props](#elementos-como-props)
    - [Diferencia entre Elemento y Componente](#diferencia-entre-elemento-y-componente)
    - [Props Inmutables](#props-inmutables)
    - [Prop Especial `children`](#prop-especial-children)
    - [Pasar Objeto como Prop](#pasar-objeto-como-prop)
  - [Cómo Hacer un Despliegue](#cómo-hacer-un-despliegue)
    - [Crear el Build de Producción](#crear-el-build-de-producción)
    - [Subir a Netlify](#subir-a-netlify)
    - [Despliegue Automático con GitHub (Opcional)](#despliegue-automático-con-github-opcional)

## Introducción a React

React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y permite crear aplicaciones web dinámicas y responsivas mediante el uso de componentes reutilizables.

## JSX

JSX (JavaScript XML) es una extensión de JavaScript que permite escribir HTML dentro de JavaScript. Es una sintaxis recomendada para definir los elementos de la interfaz de usuario en React.

```jsx
const element = <h1>Hello, world!</h1>;
```

## SWC y Babel

### SWC
SWC es un compilador superrápido escrito en Rust que puede transformar y minificar el código JavaScript. Es una alternativa a Babel con un rendimiento significativamente mejorado.

### Babel
Babel es un compilador de JavaScript ampliamente utilizado que permite usar la última sintaxis de JavaScript en navegadores antiguos. Transforma el código moderno de JavaScript en una versión compatible con más navegadores.

## Inicializar un Proyecto con Vite

Vite es una herramienta de construcción rápida para proyectos de frontend. Es compatible con React y ofrece una configuración mínima y un rendimiento rápido.

Para iniciar un proyecto con Vite:
```bash
npm create vite@latest
```
Sigue las indicaciones para configurar tu proyecto, seleccionando "React" como framework.

## Usar React sin Dependencias

Es posible usar React sin dependencias adicionales insertando los scripts de React y ReactDOM directamente en tu archivo HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <title>React App</title>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    const rootElement = document.getElementById('root');
    ReactDOM.render(React.createElement('h1', null, 'Hello, world!'), rootElement);
  </script>
</body>
</html>
```

## Crear Componentes

En React, un componente es una clase o función que opcionalmente acepta entradas (conocidas como "props") y devuelve un elemento de React que describe cómo debería aparecer una sección de la UI.

### Componente de Clase
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Componente de Función
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Estilos en React

Puedes aplicar estilos en línea, usando objetos de estilo, o importando archivos CSS.

### Estilos en Línea
```jsx
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray',
};

function StyledComponent() {
  return <div style={divStyle}>This is a styled div!</div>;
}
```

### Importar CSS
```jsx
import './App.css';

function App() {
  return <div className="app-container">Hello, styled world!</div>;
}
```

## Props en React

Las props son entradas que se pasan a los componentes de React. Son inmutables y permiten que los componentes sean dinámicos y reutilizables.

### Pasando Booleanos y Funciones como Props
```jsx
function Button(props) {
  return <button disabled={props.disabled} onClick={props.onClick}>Click me</button>;
}

<Button disabled={true} onClick={() => alert('Clicked!')} />
```

### Elementos como Props
```jsx
function Wrapper(props) {
  return <div>{props.element}</div>;
}

<Wrapper element={<h1>Hello, world!</h1>} />
```

### Diferencia entre Elemento y Componente
- **Elemento**: Es la unidad más pequeña en React. Ejemplo: `<h1>Hello</h1>`.
- **Componente**: Es una función o clase que puede devolver elementos de React. Ejemplo: `function Welcome(props) { return <h1>Hello, {props.name}</h1>; }`

### Props Inmutables
Las props no pueden ser modificadas por el componente que las recibe.

```jsx
function ImmutableComponent(props) {
  // props.name = "New Name"; // Esto no es válido
  return <div>{props.name}</div>;
}
```

### Prop Especial `children`
La prop `children` permite pasar elementos hijos a los componentes.

```jsx
function Container(props) {
  return <div>{props.children}</div>;
}

<Container>
  <p>This is a child element</p>
</Container>
```

### Pasar Objeto como Prop
```jsx
const user = { name: 'John', age: 30 };

function UserProfile(props) {
  return <div>{props.user.name} - {props.user.age}</div>;
}

<UserProfile user={user} />
```

## Cómo Hacer un Despliegue

Desplegar tu aplicación de React creada con Vite es un paso importante para compartir tu proyecto con el mundo. Aquí se explica cómo hacer el despliegue utilizando el comando `npm run build` y subiendo la carpeta generada a Netlify.

### Crear el Build de Producción

1. En la raíz de tu proyecto, ejecuta el siguiente comando para crear un build de producción:
   ```bash
   npm run build
   ```
   Esto generará una carpeta llamada `dist` que contiene tu aplicación optimizada para producción.

### Subir a Netlify

1. **Accede a Netlify**: Ve a [Netlify](https://app.netlify.com/drop).

2. **Sube la Carpeta `dist`**: Arrastra y suelta la carpeta `dist` generada en el área de subida de Netlify.

3. **Configuración Automática**: Netlify detectará automáticamente los archivos y configurará tu aplicación para que esté disponible en una URL pública.

### Despliegue Automático con GitHub (Opcional)

Si prefieres un despliegue automático cada vez que haces un push a tu repositorio de GitHub, puedes conectar tu repositorio a Netlify:

1. **Crear un Nuevo Sitio desde Git**: En tu cuenta de Netlify, selecciona "New site from Git".

2. **Conectar tu Repositorio**: Elige GitHub (o GitLab/Bitbucket), selecciona tu repositorio y branch.

3. **Configurar los Parámetros de Despliegue**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. **Desplegar**: Una vez configurado, Netlify construirá y desplegará tu aplicación automáticamente cada vez que hagas push a tu repositorio.


1-> npm install @vitejs/plugin-react -E

2-> npm install react react-dom -E 

Linter: npm install standard -D

// <React.StrictMode>

3-> frameworks class
  water css
  bolt css

4-> custom hook (extraer)

5-> HOOKS: 
useRef
useState
useEffect -> cada vez que se ejecuta por primera vez o cambian sus dependencias (ejecuta efectos)
useMemo -> memorizar computaciones que hemos echo a no ser que cambien las dependencias (recalcular un valor)
useCallBack -> lo mismo que useMemo pensado para funciones (simplificar funciones, SOLO FUNCIONES)

6-> onSubmit={handleSubmit} (usar en forms)
7-> dependencias de forma controlada y no controladas

8-> debounce (esperar a que acabe el user 500ml o 300ml para ejecutarlo) LIBRERIAS
  lodash debounce
  use debounce
  just angus