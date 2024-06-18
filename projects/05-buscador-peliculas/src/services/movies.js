const API_KEY = 'd7610c1a'

export const searchMovies = async ({ search }) => {
    if (search === '') return null
    
    /*
    if (search) {
        // setResponseMovies(withResults)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then (res => res.json())
        .then (json => {
            setResponseMovies(json)
        })
    } else {
        setResponseMovies(withoutResults)
    }
    */

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}