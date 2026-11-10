import "./App.css";
import React from "react";
import useCounter from "./useCounter";

// Custom hooks in react are functions
// that lets you reuse logic across multiple components.
// Start with "use"
// so useContext resolves this issue

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>Reset </button>
    </div>
  );
}

export default App;
