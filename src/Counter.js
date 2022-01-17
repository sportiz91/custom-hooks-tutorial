import React from "react";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  //In this case, we are not sending an initial value to the custom hook.
  // const [counter, increment, decrement, reset] = useCounter(0);

  //Example -> We want to send an initial value of 5 as argument of useCounter and we
  //Want the counter to start in 5.
  const [counter, increment, decrement, reset] = useCounter(5);

  return (
    <>
      <h1>Clicks: {counter}</h1>
      <button onClick={increment}>Increment (+)</button>
      <button onClick={decrement}>Decrement (-)</button>
      <button onClick={reset}>Reset (X)</button>
    </>
  );
};

export default Counter;

/*
  CUSTOM HOOKS are so important because we can abstract the state logic of the app and reutilize
  in other parts of the app.
  Furthermore, our component looks cleaner because the state logic is in another place.
*/
