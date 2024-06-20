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
    - [Inicializar un proyecto con vite](#inicializar-un-proyecto-con-vite)
    - [Create React App](#create-react-app)
    - [Inicializar proyecto con 'Create React App'](#inicializar-proyecto-con-create-react-app)
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
    - [.eslintrc.cjs](#eslintrccjs)
    - [env](#env)
    - [react/props-types off](#reactprops-types-off)
  - [PropTypes](#proptypes)
  - [Eventos](#eventos)
  - [Componentes (modularizar)](#componentes-modularizar)
    - [Crear componente](#crear-componente)
    - [Usar componente](#usar-componente)
    - [Pasar props a un componente](#pasar-props-a-un-componente)
  - [Estado](#estado)
  - [Efectos](#efectos)
  - [Hooks](#hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useMemo](#usememo)
    - [useCallback](#usecallback)

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

Debajo del capó, se está ejecutando `createElement` , lo que toma la etiqueta, las propiedades y los elementos secundarios del componente y muestra la misma información.

JSX está más cerca de JavaScript, no de HTML, por lo que hay algunas diferencias clave a tener en cuenta al escribirlo.

- `className` se usa en lugar de `class` para agregar clases CSS, ya que `class` es una palabra clave reservada en JavaScript.

- Las propiedades y métodos en JSX son camelCase.

- Las etiquetas de cierre automático deben terminar en una barra inclinada, Ej. `<img />`

- Su componente tampoco puede devolver varias etiquetas JSX. Tienes que envolverlos en un padre compartido, como un envoltorio `<div>...</div>` vacío o: `<>...</>`

Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.

```jsx
const App = () = {
 const title = "Mi primero proyecto con React.js";
 return (
   <div className="container">
     <h1> className="text-primary"{title}</h1>
   </div>
 );
};

export default App;
```

```jsx
const App = () ={
 const title = "Mi primero proyecto con React.js";
 const classColors = {
    primary: "text-primary",
    info: "text-info",
 };
 return (
   <div className="container">
     <h1 className={classColors.primary}>{title}</h1>
     <p className={classColors.info}>Lorem ipsum dolor sit.</p>
   </div>
 );
};

export default App;
```

## SWC y Babel

### SWC

Swc es un compilador superrápido escrito en Rust que puede transformar y minificar el código JavaScript. Es una alternativa a Babel con un rendimiento significativamente mejorado.

### Babel

Babel es un compilador de JavaScript ampliamente utilizado que permite usar la última sintaxis de JavaScript en navegadores antiguos. Transforma el código moderno de JavaScript en una versión compatible con más navegadores.

## Constructores

### Vite

Vite es una herramienta de tooling para el Frontend. Lo puedes agrupar en la categoría donde se encuentran otros como Webpack, Parcel y Snowpack. Es muy útil para crear una estructura de proyecto que se pueda utilizar con React y de una forma muy rápida, ya que no necesitas tener que configurar nada.

### Inicializar un proyecto con vite

```bash
npm create vite@latest <nombre-de-mi-proyecto>
```

Sigue las indicaciones para configurar tu proyecto seleccionando "React" como framework.

Entre los diferentes frameworks que te sugiere, elige el que necesites, en nuestro caso react. Después te pregunta si quieres utilizar TypeScript o no. Elige lo que prefieras.

```bash
✔ Project name: … vite-project
? Select a framework: › - Use arrow-keys. Return to >submit.
   Vanilla
   Vue
❯   React
   Preact
   Lit
   Svelte
```

```bash
? Select a variant: › - Use arrow-keys. Return to >submit.
❯   JavaScript
   TypeScript
 return numero + 2;
```

```bash
Scaffolding project in /Users/carlosazaustre/dev/vite-project...

Done. Now run:

 cd vite-project
 npm install
 npm run dev
```

Una vez creado, dirígete al directorio creado y ejecuta el comando de instalación:

```bash
cd <nombre-de-mi-proyecto>
npm install
```

Una vez instaladas las dependencias, ejecuta el comando de desarrollo y ya puedes empezar a trabajar.

```bash
npm run dev

VITE v3.1.8 ready in 396 ms

 Local: http://localhost:5173/
 Network: use `--host` to expose
```

### Create React App

Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.

Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 14.0.0 y npm >= 5.6 instalados en tu máquina. Para crear un proyecto ejecuta:

### Inicializar proyecto con 'Create React App'

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
          return <ItemFrut key={index} frut={frut} />;
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
  return (
    <button disabled={props.disabled} onClick={props.onClick}>
      Click me
    </button>
  );
}

<Button disabled={true} onClick={() => alert("Clicked!")} />;
```

### Elementos como Props

```jsx
function Wrapper(props) {
  return <div>{props.element}</div>;
}

<Wrapper element={<h1>Hello, world!</h1>} />;
```

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
</Container>;
```

### Pasar Objeto como Prop

```jsx
const user = { name: "John", age: 30 };

function UserProfile(props) {
  return (
    <div>
      {props.user.name} - {props.user.age}
    </div>
  );
}

<UserProfile user={user} />;
```

## EsLint

ESLint es una herramienta de linting para JavaScript. El linting es un proceso mediante el cual se analiza el código fuente de un programa en busca de posibles errores, problemas de estilo o prácticas desaconsejadas.

ESLint permite detectar errores comunes en el código, como variables no utilizadas, funciones no definidas, declaraciones duplicadas, entre otros.

### .eslintrc.cjs

El archivo .eslintrc.cjs es un archivo de configuración de ESLint en formato CommonJS (CJS).

### env

La propiedad node: true en la sección env de un archivo de configuración de ESLint indica que el código que está siendo analizado por ESLint se ejecutará en un entorno de Node.js.

Esto le permite a ESLint reconocer y aplicar las reglas y configuraciones específicas de Node.js durante el proceso de linting.

```jsx
env: { browser: true, es2020: true, node: true },
```

### react/props-types off

```jsx
module.exports = {
  // ...otras configuraciones...

  rules: {
    // ...otras reglas...
    "react/prop-types": "off", // Desactivar validación de PropTypes
  },
};
```

## PropTypes

PropTypes es una característica que permite especificar el tipo de las props (propiedades) que se pasan a los componentes.

PropTypes proporciona una forma de documentar y validar las props que se esperan en un componente, lo que ayuda a evitar errores y facilita el desarrollo y mantenimiento del código.

Tipos comunes de PropTypes:

- **_number_**: Valida que la prop sea un número.

- **_bool_**: Valida que la prop sea un valor booleano (true o false).

- **_array_**: Valida que la prop sea un array.

- **_object_**: Valida que la prop sea un objeto.

- **_symbol_**: Valida que la prop sea un símbolo.

- **_node_**: Valida que la prop pueda ser cualquier cosa que se pueda renderizar en React (elemento React, cadena de texto, número, fragmento, etc.).

- **_element_**: Valida que la prop sea un único elemento React (es decir, no un fragmento ni una cadena de texto).

- **_instanceOf(Constructor)_**: Valida que la prop sea una instancia de una clase específica.

- **_oneOf([val1, val2, ...])_**: Valida que la prop sea uno de los valores proporcionados en un array.

- **_oneOfType([type1, type2, ...])_**: Valida que la prop cumpla con al menos uno de los tipos de datos especificados en un array.

- **_arrayOf(type)_**: Valida que la prop sea un array que contenga elementos del tipo especificado.

- **_objectOf(type)_**: Valida que la prop sea un objeto cuyos valores sean del tipo especificado.

```jsx
import PropTypes from "prop-types";

const MyButton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <MyButton text="text" handleClick={handleClick}></MyButton>
    </div>
  );
};
export default App;
```

## Eventos

React te permite añadir controladores de eventos a tu JSX. Los controladores de eventos son tus propias funciones que se ejecutarán en respuesta a interacciones como hacer clic, hover, enfocar inputs en formularios, entre otras.

```jsx
export default function Button() {
  function handleClick() {
    alert("¡Me hiciste clic!");
  }

  return <button onClick={handleClick}>Hazme clic</button>;
}
```

Definiste la función handleClick y luego la pasaste como una prop al `<button>`.

handleClick es un controlador de evento.

Las funciones controladoras de evento usualmente están definidas dentro de tus componentes.

Tienen nombres que empiezan con handle, seguido del nombre del evento.

Por convención, es común llamar a los controladores de eventos como handle seguido del nombre del evento.

Evento en línea en el JSX:

```jsx
<button onClick={function handleClick() {
  alert('¡Me hiciste clic!');
}}>
```

o de manera más corta, usando una función flecha:

```jsx
<button onClick={() => {
  alert('¡Me hiciste clic!');
}}>
```

## Componentes (modularizar)

Los componentes son uno de los conceptos esenciales de React. Constituyen los cimientos sobre los que construyes interfaces de usuario (UIs por sus siglas en inglés).

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

### Crear componente

```jsx
export default function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}
```

- El prefijo **_export_** default es parte de la sintaxis estándar de Javascript (no es específico de React). Te permite marcar la función principal en un archivo para que luego puedas importarlas en otros archivos.

- Con function **_Profile() { }_** defines una función con el nombre **_Profile_**.

- El componente devuelve una etiqueta `<img />` con atributos src y alt. `<img />` se escribe como en HTML, ¡pero en realidad es JavaScript por detrás! Esta sintaxis se llama JSX, y te permite incorporar marcado dentro de JavaScript.

Las sentencias return se pueden escribir todo en una línea, como en este componente:

```jsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

Pero si tu marcado no está todo en la misma línea que la palabra clave return, debes ponerlo dentro de paréntesis como en este ejemplo:

```jsx
return (
 <div>
   <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
 </div>
>);
```

### Usar componente

```jsx
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

Nota la diferencia de mayúsculas y minúsculas:

`<section>` está en minúsculas, por lo que React sabe que nos referimos a una etiqueta HTML.

`<Profile />` comienza con una P mayúscula, por lo que React sabe que queremos usar nuestro componente llamado Profile.

### Pasar props a un componente

Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre puede enviar información a sus componentes hijos mediante el uso de props. Las props pueden parecerte similares a los atributos HTML, pero permiten pasar cualquier valor de JavaScript a través de ellas, como objetos, arrays y funciones.

```jsx
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return <Avatar />;
}
```

`className, src, alt, width y height`

- **_Pasar propts al componente hijo_**

```jsx
export default function Profile() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}
```

- **_Acceder a props dentro del componente hijo_**

```jsx
function Avatar({ person, size }) {
  // puedes acceder a los valores de person y size desde aquí
}
```

## Estado

Los componentes a menudo necesitan cambiar lo que se muestra en pantalla como resultado de una interacción. Escribir dentro de un formulario debería actualizar el campo de texto, hacer clic en «siguiente» en un carrusel de imágenes debería cambiar la imagen que es mostrada; hacer clic en un botón para comprar un producto debería actualizar el carrito de compras.

En los ejemplos anteriores los componentes deben «recordar» cosas: el campo de texto, la imagen actual, el carrito de compras.

En React, a este tipo de memoria de los componentes se le conoce como **_estado_**.

Para hacer cambios vamos a utilizar un hook: **_useState_**

## Efectos

Algunos componentes tienen la necesidad de sincronizarse con sistemas externos. Por ejemplo, es posible que desees controlar un componente que no sea de React en función a un estado de React, configurar una conexión de servidor, o enviar un registro de análisis cuando un componente se muestra en la pantalla.

Los Efectos te permiten ejecutar código después del renderizado para que puedas sincronizar tu componente con un sistema fuera de React.

- **_Código renderizado (introducido en Describir la UI)_** se encuentra en el nivel superior de tu componente. Aquí es donde tomas las props y el estado, los modificas, y se devuelve el JSX que se desea ver en la pantalla. El código renderizado debe ser puro.

- Como si fuese una fórmula matemática, sólo debe calcular el resultado, y no hacer nada más.

- **_controladores de eventos (introducido en Añadir interactividad)_** son funciones anidadas dentro de tus componentes que hacen cosas en lugar de solo calcularlas. Un controlador de evento podría actualizar un campo de un formulario, enviar una solicitud HTTP POST para comprar un producto, o hacer que el usuario navegue hacia otra pantalla.

- Los controladores de eventos contienen «efectos secundarios» (Pueden cambiar el estado del programa) causado por una acción específica del usuario (por ejemplo, al hacer clic en un botón o al escribir).

## Hooks

Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.

React proporciona algunos Hooks incorporados.

También puedes crear tus propios Hooks para reutilizar el comportamiento con estado entre diferentes componentes. **_customHook_**

### [useState](https://es.react.dev/reference/react/useState)

useState es un Hook de React que te permite agregar una variable de estado a tu componente.

- Importar el useState

```jsx
import { useState } from "react";
```

- Crear un estado

El único argumento para useState es el valor inicial de su variable de estado. En este ejemplo, el valor inicial de index se establece en 0 con `useState(0)`.

Cada vez que el componente se renderiza, el useState devuelve un array que contiene dos valores:

1. La **_variable de estado_** (index) con el valor que almacenaste.

2. La **_función que establece el estado_** (setIndex) que puede actualizar la variable de estado y alertar a React para que renderice el componente nuevamente.

index es una variable de estado y setIndex es la función que setea el estado.

```jsx
const [index, setIndex] = useState(0);
```

En este caso, queremos que React recuerde el index.

1. **_Tu componente se renderiza por primera vez_**. Debido a que pasamos 0 a useState como valor inicial para index, esto devolverá [0, setIndex]. React recuerda que 0 es el último valor de estado.

2. **_Actualizas el estado_**. Cuando un usuario hace clic en el botón, llama a setIndex(index + 1). index es 0, por lo tanto es setIndex(1). Esto le dice a React que recuerde que index es 1 ahora y ejecuta otro renderizado.

3. **_El componente se renderiza por segunda vez_**. React todavía ve useState(0), pero debido a que React recuerda que estableció index en 1, devuelve [1, setIndex] en su lugar.

### [useEffect](https://es.react.dev/reference/react/useEffect)

- Importar el useEffect

```jsx
import { useEffect } from "react";
```

Luego, llámalo en el nivel superior de tu componente y escribe algún código dentro del Efecto:

```jsx
function MyComponent() {
  useEffect(() => {
    // El código aquí se ejecutará después de *cada* renderizado
  });
  return <div />;
}
```

Cada vez que el componente se renderiza, React actualizará la pantalla y entonces ejecutará el código dentro de useEffect.

En otras palabras, useEffect «retrasa» la ejecución de una parte del código hasta que el renderizado es reflejado en la pantalla.

A veces, es lento. Sincronizar con un sistema externo no siempre es instantáneo, por lo que es posible que desees evitar hacerlo a menos que sea necesario. Por ejemplo, no quieres volver a conectarte al servidor de chat en cada pulsación de tecla.

Puedes indicarle a React omitir la innecesaria ejecución del Efecto especificando un array de dependencias como segundo argumento en la llamada a useEffect. Empieza añadiendo un array vacío []

```jsx
useEffect(() => {
  // ...
}, []);
```

```jsx
useEffect(() => {
  if (isPlaying) {
    console.log("Llamando a video.play()");
    ref.current.play();
  } else {
    console.log("Llamando a video.pause()");
    ref.current.pause();
  }
}, [isPlaying]);
```

```jsx
useEffect(() => {
  // Esto se ejecuta después de cada renderizado
});

useEffect(() => {
  // Esto sólo se ejecuta en el montaje (cuando el componente aparece)
}, []);

useEffect(() => {
  // Esto se ejecuta en el montaje *y también* si a o b han cambiado desde el último renderizado
}, [a, b]);
```

### [useMemo](https://es.react.dev/reference/react/useMemo)

useMemo es un Hook de React que te permite guardar en caché el resultado de un cálculo entre renderizados.

Memorizar computaciones que hemos echo a no ser que cambien las dependencias (recalcular un valor)

```jsx
const cachedValue = useMemo(calculateValue, dependencies)
```

Es especialmente útil cuando el valor a memorizar es producto de un cálculo que consume mucha memoria y procesamiento.

```jsx
import { useMemo } from 'react'

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count])

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  )
}
```

En este caso, el componente ***Counter*** recibe una prop count que es un número. El componente calcula el doble de ese número y lo muestra en pantalla.

El hook useMemo recibe dos parámetros: una ***función*** y un ***array de dependencias***. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count.

La ventaja es que si la prop count no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.


### [useCallback](https://es.react.dev/reference/react/useCallback)

Lo mismo que useMemo pensado para funciones (simplificar funciones, SOLO FUNCIONES)

useCallback es un Hook de React que te permite almacenar la definición de una función entre renderizados subsecuentes.

```jsx
const cachedFn = useCallback(fn, dependencies)
```

Un ejemplo típico de su uso es cuando se tiene un componente padre que contiene varios componentes hijos. 

Si el componente padre se vuelve a renderizar, también lo harán todos sus componentes hijos, incluso si su estado no ha cambiado. Esto puede causar un rendimiento ineficiente en aplicaciones grandes o con una alta frecuencia de actualizaciones.

```jsx
import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Child handleClick={ handleClick } />
    </div>
  );
}

export default Parent;
```