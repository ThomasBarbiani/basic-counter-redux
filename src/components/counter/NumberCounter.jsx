import React from 'react'
import { useSelector } from "react-redux"

const NumberCounter = () => {
  const counter = useSelector((state) => state.counter.counter)
  return (
    <div>
      <h1>Contador</h1>
      <h2>{counter}</h2>
    </div>
  )
}

export default NumberCounter