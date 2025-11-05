
import { useEffect, useState, useRef, useMemo } from 'react'
import './App.css'
import { UsersLists } from './components/UserLists.tsx'
import { type User, SortBy } from './types.d'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showcolors, setShowcolors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowcolors(!showcolors)
  }

  const toggleSortByCountry = () => {
    setSorting(prev => prev === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const filteredUsers = useMemo(() => {
    console.log('calculate filteredUsers')

    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    console.log('calculate sortedUsers')

    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record <string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  // const filteredUsers = (() => {
  //   console.log('calculate filteredUsers')
  //   return filterCountry != null && filterCountry.length > 0
  //     ? users.filter(user => {
  //       return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  //     })
  //     : users
  // })()

  // const sortedUsers = (() => {
  //   console.log('calculate sortedUsers')

  //   return sortByCountry
  //     ? filteredUsers.toSorted(
  //       (a, b) => a.location.country.localeCompare(b.location.country)
  //     )
  //     : filteredUsers
  // })()

  return (
    <div className='App'>
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors}>
          Colorear filas
        </button>

        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por país'}
        </button>

        <button onClick={handleReset}>
          Resetear estado
        </button>

        <input placeholder='Filtra por país' onChange={(e) => {
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        <UsersLists changeSorting={handleChangeSort} deleteUser={handleDelete} showcolors={showcolors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
