import { useSelector, useDispatch } from "react-redux"
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter)
  const customNumber = 10;
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addCustomNumber = () => {
    dispatch(actions.addNumber(customNumber))
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
        <button onClick={addCustomNumber}>
          Aumentar em {customNumber}
        </button>
      </div>  
  )
}

export default App
