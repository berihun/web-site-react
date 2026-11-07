import "./App.css";
import { useState } from "react";

function App() {
  // useState example
  const [count, setCount] = useState(0); // the state is count, where as setCount is the function

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <h2>Counter Value: {count}</h2>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
