import React from 'react'
import { useDispatch } from "react-redux"
import { counterActions } from "../../store/slices/counter";

const ButtonsCounter = () => {
	const customNumber = 10;
	const dispatch = useDispatch();
	
	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	const addCustomNumber = () => {
		dispatch(counterActions.addNumber(customNumber))
	}

	return (
		<div>
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

export default ButtonsCounter