import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFat } from './hooks/useCatFact.js'
import { Otro } from './Components/Otro.jsx'

export function App () {
  const { fact, refreshFact } = useCatFat()
  // Custom Hook useCatImage({})
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      <Otro />
    </main>
  )
}
