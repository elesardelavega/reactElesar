import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/usemovies.js'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from "just-debounce-it"

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

    useEffect(() => {

    // useRef para ver si es el 1er input
    if (isFirstInput.current) {
      isFirstInput.current = search === '' // true si es vacio
      return
    }

    if (search === ''){
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [ sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debounceGetmovies = useCallback(
    debounce(search => {
      //console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    /*
      const inputEl = inputRef.current
      const value = inputEl.value
      console.log(value)
      const { query } = Object.fromEntries(
        new window.FormData(event.target)
      )
    */
    getMovies({ search })
  }

  const handleSort = () => { 
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    // if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debounceGetmovies(newQuery)
    //getMovies({ search: newQuery})
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
            /*ref={inputRef}*/ onChange={handleChange} value={search} name="query" placeholder='Avengers, Star Wars, The Matrix...'>
          </input>
          <button type='submit'>Buscar</button>
          Ordenar por titulo: <input type='checkbox' onChange={handleSort} checked={sort}></input>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        { 
          loading ? <p>Cargando ... </p> :  <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
