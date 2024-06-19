# React

Aprendiendo React con [midulive](https://www.youtube.com/playlist?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29)

- [React](#react)
  - [Introducción a React](#introducción-a-react)
  - [Requisitos](#requisitos)
    - [Nodejs](#nodejs)
    - [Npm](#npm)
    - [Npx](#npx)
  - [JSX](#jsx)
  - [SWC y Babel](#swc-y-babel)
    - [SWC](#swc)
    - [Babel](#babel)
  - [Constructores](#constructores)
    - [Vite](#vite)
    - [Create React App](#create-react-app)
  - [Componentes](#componentes)
  - [Renderizado condicional](#renderizado-condicional)
  - [Props](#props)
    - [Pasando Booleanos y Funciones como Props](#pasando-booleanos-y-funciones-como-props)
    - [Elementos como Props](#elementos-como-props)
    - [Diferencia entre Elemento y Componente](#diferencia-entre-elemento-y-componente)
    - [Props Inmutables](#props-inmutables)
    - [Prop Especial `children`](#prop-especial-children)
    - [Pasar Objeto como Prop](#pasar-objeto-como-prop)
  - [EsLint](#eslint)

## Introducción a React

React es una librería de JavaScript para construir interfaces de usuario.

Se basa en una arquitectura de componentes, que pueden contener propiedades individuales, así como su propio estado, con lo cual se pueden reutilizar en diferentes partes de la misma interface, o incluso en interfaces diferentes.

React se puede renderizar en el navegador con la ayuda de otra librería llamada ReactDOM, así como también del el lado del servidor a través de Node.js.

Además también sirve para crear aplicaciones móviles a través del framework React Native.

React fue concebido en el año 2011 dentro del equipo de desarrollo de Facebook, y abierto a la comunidad en Mayo de 2013. Hoy en día es mantenido aún por la red social, además de una amplia comunidad de desarrolladores.

## Requisitos

### Nodejs
Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript. [Web](https://nodejs.org/en/)

### Npm
NPM (Node Package Manager) es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general. [fuente](https://openwebinars.net/blog/que-es-node-package-manager/)

### Npx
Npx es una herramienta de cli que nos permite ejecutar paquetes de npm, los busca en su servidor y lo ejecuta en nuestra máquina.
Si usas npx no tienes que instalar paquetes de forma global.


## JSX
JSX (JavaScript XML) es una extensión de JavaScript que permite escribir HTML dentro de JavaScript. Es una sintaxis recomendada para definir los elementos de la interfaz de usuario en React.

El uso de JSX no es obligatorio para escribir React.

Debajo del capó, se está ejecutando ```createElement``` , lo que toma la etiqueta, las propiedades y los elementos secundarios del componente y muestra la misma información.

JSX está más cerca de JavaScript, no de HTML, por lo que hay algunas diferencias clave a tener en cuenta al escribirlo.

> ```className``` se usa en lugar de ```class``` para agregar clases CSS, ya que ```class``` es una palabra clave reservada en JavaScript.

> Las propiedades y métodos en JSX son camelCase.

>Las etiquetas de cierre automático deben terminar en una barra inclinada, Ej. ```<img />```

>Su componente tampoco puede devolver varias etiquetas JSX. Tienes que envolverlos en un padre compartido, como un envoltorio ```<div>...</div>``` vacío o: ```<>...</>```

Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.

> ```jsx
> const App = () => {
>  const title = "Mi primero proyecto con React.js";
>  return (
>    <div className="container">
>      <h1 className="text-primary">{title}</h1>
>    </div>
>  );
>};
>
>export default App;
> ```


> ```jsx
> const App = () => {
>  const title = "Mi primero proyecto con React.js";
>  const classColors = {
>     primary: "text-primary",
>     info: "text-info",
>  };
>  return (
>    <div className="container">
>      <h1 className={classColors.primary}>{title}</h1>
>      <p className={classColors.info}>Lorem ipsum dolor sit.</p>
>    </div>
>  );
>};
>
>export default App;
> ```


## SWC y Babel

### SWC
Swc es un compilador superrápido escrito en Rust que puede transformar y minificar el código JavaScript. Es una alternativa a Babel con un rendimiento significativamente mejorado.

### Babel
Babel es un compilador de JavaScript ampliamente utilizado que permite usar la última sintaxis de JavaScript en navegadores antiguos. Transforma el código moderno de JavaScript en una versión compatible con más navegadores.

## Constructores

### Vite
Vite es una herramienta de tooling para el Frontend. Lo puedes agrupar en la categoría donde se encuentran otros como Webpack, Parcel y Snowpack. Es muy útil para crear una estructura de proyecto que se pueda utilizar con React y de una forma muy rápida, ya que no necesitas tener que configurar nada.

> ### Inicializar un proyecto con vite
> ```bash
> npm create vite@latest <nombre-de-mi-proyecto>
>```
> 
> Sigue las indicaciones para configurar tu proyecto seleccionando "React" como framework.
>
> Entre los diferentes frameworks que te sugiere, elige el que necesites, en nuestro caso react. Después te pregunta si quieres utilizar TypeScript o no. Elige lo que prefieras.
> 
> ```bash
> ✔ Project name: … vite-project
>? Select a framework: › - Use arrow-keys. Return to >submit.
>    Vanilla
>    Vue
>❯   React
>    Preact
>    Lit
>    Svelte
> ```
> 
>```bash
> ? Select a variant: › - Use arrow-keys. Return to >submit.
>❯   JavaScript
>    TypeScript
>  return numero + 2;
>```
>
> ```bash
>Scaffolding project in /Users/carlosazaustre/dev/vite-project...
>
>Done. Now run:
>
>  cd vite-project
>  npm install
>  npm run dev
> ```
> 
> Una vez creado, dirígete al directorio creado y ejecuta el comando de instalación:
> ```bash
>cd <nombre-de-mi-proyecto>
>npm install
> ```
> Una vez instaladas las dependencias, ejecuta el comando de desarrollo y ya puedes empezar a trabajar.
>```bash
> npm run dev
>
> VITE v3.1.8 ready in 396 ms
>
>  Local: http://localhost:5173/
>  Network: use `--host` to expose
>```


### Create React App
Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.

Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 14.0.0 y npm >= 5.6 instalados en tu máquina. Para crear un proyecto ejecuta:
> ### Inicializar proyecto con 'Create React App'
```bash
npx create-react-app my-app
cd my-app
npm start
```


## Componentes
Las aplicaciones React están hechas de componentes.

Un componente es una parte de la IU (interfaz de usuario) que tiene su propia lógica y apariencia.

Un componente puede ser tan pequeño como un botón o tan grande como una página entera.

Los componentes de React son funciones de JavaScript:

```jsx
const MyButton = () => {
  return <button>i'am a button</button>;
};

const App = () => {
  const title = "Mi primero proyecto con React.js";
  return (
    <div className="container">
      <h1 className="text-primary">{title}</h1>
      <MyButton />
    </div>
  );
};

export default App;
```
Fíjate que <MyButton /> empieza con mayúscula. Así es como sabes que es un componente React. Los nombres de los componentes de React siempre deben comenzar con una letra mayúscula, mientras que las etiquetas HTML deben estar en minúsculas.

## Renderizado condicional
[condicional](https://es.legacy.reactjs.org/docs/conditional-rendering.html): En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

```jsx
const MyButton = () => {
  return <button>i'am a button</button>;
};

const UserMessage = () => {
  return <h2>Bienvenido usuario</h2>;
};

const App = () => {
  const title = "Mi primero proyecto con React.js";
  const user = true;
  return (
    <div className="container">
      <h1 className="text-primary">{title}</h1>
      <MyButton />
      {user ? <UserMessage /> : "Offline"}
    </div>
  );
};

export default App;
```

## Props
Se utiliza para enviar información al componente anidado.

La información que transmites de esta manera se llama props.

```jsx
const ItemFrut = (props) => {
  return <li>{props.frut}</li>;
};

const App = () => {
  const fruts = ["🍐", "🍌", "🍎"];
  return (
    <div className="container">
      <ul>
        {fruts.map((frut, index) => {
          return (
            <ItemFrut
              key={index}
              frut={frut}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
```

Las props son entradas que se pasan a los componentes de React. Son inmutables y permiten que los componentes sean dinámicos y reutilizables.

Con PropsTypes podemos validar los props que recibe un componente:

```jsx
import PropTypes from "prop-types";

const ItemFrut = (props) => {
  return <li>{props.frut}</li>;
};

ItemFrut.propTypes = {
  frut: PropTypes.string.isRequired,
};
```

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
````

### Diferencia entre Elemento y Componente
- **Elemento**: Es la unidad más pequeña en React. Ejemplo: `<h1>Hello</h1>`.
- **Componente**: Es una función o clase que puede devolver elementos de React. Ejemplo: `function Welcome(props) { return <h1>Hello, {props.name}</h1>; }`

### Props Inmutables
Las props no pueden ser modificadas por el componente que las recibe.

```jsx
function ImmutableComponent(props) {
  // props.name = "New Nam; // Esto no es válido
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

## EsLint