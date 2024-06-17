import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  // Custom Hook useCatImage({})
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
