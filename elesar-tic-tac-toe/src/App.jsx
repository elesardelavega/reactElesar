import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"


function App() {
  // estado de cuadrados
  const [board, setBoard] = useState(Array(9).fill(null))

  // estado de turnos
  const [turn, setTurn] = useState(TURNS.X)

 // null no hay ganador, false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
    const newWinner = checkWinnerFrom(newBoard)
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

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
