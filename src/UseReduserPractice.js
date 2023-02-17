import React, { useReducer } from "react";

function UseReduserPractice() {
  let initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
};
const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReduserPractice;
