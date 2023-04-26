import { useState } from 'react'
import { Square } from './componentes/Square'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  Se crea una constante para los turnos
*/

const TURNS={
  X:'x',
  O:'o'
}




//Constante con las rutas ganadoras
const WINNER_COMBOS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [9,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



function App() {
  //Se crea el tablero como estado
  const [board,setBoard] = useState(Array(9).fill(null))
  //Se crea un estado para los turnos
  const [turn,setTurn]=useState(TURNS.X)

  //Se crea un estado para saber el ganador del juego, si es null, no hay ganador y false si es empate
  const [winner,setWinner]=useState(null)

  const checkWinner=(boardToCheck)=>{
    //Se revisan todas las combinaciones ganadoras
    //para ver si x u o ganó
    for(const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if(
        boardToCheck[a] && //0 -> x u o
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  //Se replica la interfaz y se empieza el juego de nuevo
  //Conforme a los estados
  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame=(newBoard)=>{
    /*
      Revisamos si hay empate, si no hay más espacios vacíos en el tablero
    */
   return newBoard.every((square)=>square!=null)
  }


  const updateBoard=(index)=>{

    /*
      No actualizamos esta posición del tablero si ya tiene algo
    */
    if(board[index] || winner) return

    /*
      Se crea un nuevo tablero y se le coloca el turno en el que esta
      y se actualiza con la segunda variable del estado del tablero
    */
    const newBoard=[...board]
    newBoard[index]=turn  // x u o
    setBoard(newBoard)

    //Se crea una constante para actualizar el turno
    /*
      Sí turno es igual a TURNO X entonces sigue TUERNO O, si no, sigue TUERNO X
    */
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //Se revisa si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reinicio del juego</button>
      <section className='game'>
        {
          board.map((_,index)=>{
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                  {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn==TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn==TURNS.O}>{TURNS.O}</Square>
      </section>
      {
      winner != null && (
        <section className='winner'>
          <div className='text'>
            <h2>
              {
                winner == false
                ? 'Empate'
                : 'Ganó: '
              }
            </h2>
            <header className='win'>
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
