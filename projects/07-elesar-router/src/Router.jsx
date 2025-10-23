/* eslint-disable no-unused-vars */
import { useEffect, useState, Children } from 'react';
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";
import { getCurrentPath } from "./utils.js"

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routerParams = {}

  // añadir rutas desde children routes
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const {name} = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    // path-to-regexp para detectar rutas con parámetros
    const matchedUrl = match(path, { decode: decodeURIComponent });
    const matched = matchedUrl(currentPath);
    if (!matched) return false;

    // guarda los parámetros dinamicos y los pasa al componente
    routerParams = matched.params;
    return true;
  })?.Component;

  return Page ? <Page routerParams={routerParams} /> : <DefaultComponent routerParams={routerParams} />;
}