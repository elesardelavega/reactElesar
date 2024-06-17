import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_UR = 'https://cataas.com/cat/says/hello'

export function App () {
  // constante de fact
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // primero array vacio y luego function -> useEffect([])
  // después funcion -> useEffect(() => {}, [])
  // recuperar cita al cargar
  useEffect(() => {
    // recoger datos de la api
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      // transformar la respuesta en json
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        // TODO: handle error if !res.ok
        return res.json()
      })
      // data nos devuelve todo el objeto y accedemos al .fact
      .then(data => {
        const { fact } = data
        setFact(fact)

        // recuperar 3 primeras palabras
        // --> const firstWord = fact.split(' ', 3)
        // --> const firstWord = fact.split(' ').slide(0, 3).join(' ')
        // slice del 0 al 3, join juntar en una cadena de texto
        // mdn (buscar de manera más precisa en documentación)
      })

    /* .catch((err) => {
      // tanto si hay error con la respuesta
      // como si hay error con la peticion
    }) */
  }, [])
  // useEffect(() => {}, [dependencias que pueden cambiar])

  // recuperar imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    // si no hay fact devuelve vacio
    if (!fact) return

    // recuperar 1a palabra
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}`)
      // .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
        // setImageUrl(`https://cataas.com/cat/says/${url}`)
        // en el estado lo minimo necesario (estatica)
        // setear la minima info y calcular lo que debemos renderizar
        // const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
        // <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />
      })
  }, [fact])

  const handleClick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
    </main>
  )
}
