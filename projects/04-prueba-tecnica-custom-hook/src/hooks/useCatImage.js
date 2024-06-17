import { useState, useEffect } from 'react'

// custom hook, siempre empezará por 'use' para que lo reconozca react
// podemos reusar esta function (custom hook) en cualquier componente
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
} // {imageUrl: 'https://...'}
