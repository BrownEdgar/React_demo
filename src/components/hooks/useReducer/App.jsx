import { useReducer } from "react";
import reducer, { actionTypes, initialValue } from "./reducer";
import "./App.css";

function App() {
  const [value, dispatch] = useReducer(reducer, initialValue, () => {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 150));
  });
  return (
    <div className='App'>
      <h1>use Reducer value: {JSON.stringify(value)}</h1>
      <div className='buttons'>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.PUSH, payload: [1, 2, 3, 4, 5] })
          }
        >
          PUSH
        </button>
        <button onClick={() => dispatch({ type: actionTypes.POP, payload: 1 })}>
          POP
        </button>
        <button
          onClick={() =>
            dispatch({ type: actionTypes.SORT, payload: { sortOption: "asc" } })
          }
        >
          SORT a-z
        </button>
        <button
          onClick={() => dispatch({ type: actionTypes.SWAP, payload: [0, 3] })}
        >
          SWAP
        </button>
        <button onClick={() => dispatch({ type: actionTypes.CLEAR })}>
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default App;
