import { useEffect, useState } from "react"

// componente que visualizamos en el padre
const FollowMouse = () => {

  // constante de activare boton con el estado useState (iniciandolo como falso, desactivado)
  const [enabled, setEnabled] = useState(false)

  // inicializamos el objeto X e Y del cursor con 0
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //pointermove
  useEffect(() => {

    // click a enabled (boton) activandolo
    console.log('effect', { enabled })

    // crear function handleMove pasandole el evento
    const handleMove = (event) => {
      // creamos constantes de coordenadas Z e Y
      // igualando estas constantes al evento del puntero
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })

      // actualizamos el estado de la posición
      setPosition({ x: clientX, y: clientY })
    }

    // si el estado de enabled es true (activado)
    if (enabled) {
      // evento de escucha, pasamos la function handleMove cuando se mueva el puntero
      window.addEventListener('pointermove', handleMove)
    }

    // devolver una funcion para limpiar el efecto (cleanup)
    // -> cuando el componente se desmonta
    // -> cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      // limpieza de la suscripción del evento pointermove
      window.removeEventListener('pointermove', handleMove)

      // ver eventos -> getelementListeners(window) (elemento donde se suscribe)

    }

  }, [enabled])


  // change body className
  useEffect(() => {

    // añadir clase 'no-cursor' al body
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      // eliminar clase 'no-cursor' al body
      document.body.classList.remove('no-cursor')
    }

  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09F',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
