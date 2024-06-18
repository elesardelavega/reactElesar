import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ search, sort }) {
    // estado inicial con array vacio
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    // exportamos para usar desde la app
    const getMovies = useMemo(() => { 
    // ejemplo useCallBack ->  const getMovies = useCallBack( async ({ search }) => { (SOLO FUNCIONES)
        // pasando search por parametro para optimizar
        return async ({ search }) => {
            if (search === previousSearch.current) return

            try {
                setLoading(true)
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({ search })
                setMovies(newMovies)
            } catch (e) {
                setError(e.message)
            } finally { 
                // tanto en el try como el catch se ejecuta
                setLoading(false)
            }
        }
    }, [])
    
    // mantener lo que ha calculado antes, se renderiza al cambiar el orden (sort) o las peliculas (movies)
    // memorizar computaciones que hemos echo a no ser que cambien las dependencias
    const sortedMovies = useMemo(() => { 
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}
