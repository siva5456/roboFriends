import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return state.count;
  }
}

function ReducerComp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ color: "white" }}>Count: &nbsp; {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default ReducerComp;

