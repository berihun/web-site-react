import "./App.css";
import { use, useState } from "react";

function App() {
  // useState example
  const [count, setCount] = useState(0); // the state is count, where as setCount is the function
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  };

  const decrementCount = () => {
    setCount(count - step);
  };

  return (
    <div className="app-container">
      <h2>Counter Value: {count}</h2>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
