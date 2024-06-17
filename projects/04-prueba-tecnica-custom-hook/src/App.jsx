import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
// const CAT_ENDPOINT_IMAGE_UR = 'https://cataas.com/cat/says/hello'

// custom hook, siempre empezará por 'use' para que lo reconozca react
// podemos reusar esta function (custom hook) en cualquier componente
function useCatImage ({ fact }) {
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

export function App () {
  const [fact, setFact] = useState()

  // Custom Hook useCatImage({})
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact((newFact)))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
