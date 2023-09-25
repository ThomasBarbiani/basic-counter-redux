import { useSelector, useDispatch } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'})
  }
  const decrement = () => {
    dispatch({type: 'DEC'})
  }
  const add10 = () => {
    dispatch({type: 'ADD10', payload: 10})
  }
  return (
      <div>
        <h1>Contador</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>
          Aumentar
        </button>
        <button onClick={decrement}>
          Diminuir
        </button>
        <button onClick={add10}>
          Aumentar em 10
        </button>
      </div>  
  )
}

export default App
