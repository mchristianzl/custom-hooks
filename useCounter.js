import { useState } from "react"

export const useCounter = (value) => {

  const [counter, setCounter] = useState( value );

  const increment = (a = 1) => {
    setCounter( counter + a);
  }

  const decrement = (a = 1) => {
    setCounter( counter - a);
  }

  const reset = () => {
    setCounter( value );
  }

  return {
    counter, 
    increment, 
    decrement, 
    reset
  }
}
