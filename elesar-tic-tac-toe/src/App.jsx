import { useState } from "react"
import confetti from 'canvas-confetti'
const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleclick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleclick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // estado de cuadrados
  const [board, setBoard] = useState(Array(9).fill(null))

  // estado de turnos
  const [turn, setTurn] = useState(TURNS.X)

 // null no hay ganador, false empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // revisar combinaciones ganadores
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // revisar si hay empate
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    // no actualizamos si existe algo
    if (board[index] || winner) return

    // actualizar tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard) // asincrona

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // rervisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner) // actualiza el estado (asincrono)
    } else if (checkEndGame(newBoard)){
        setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

        {
          winner != null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false ? 'Empate' : 'Ganó:'
                  }
                </h2>

                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
    </main>
  )
}

export default App
