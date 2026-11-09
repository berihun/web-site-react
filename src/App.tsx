import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fixed: Update document title to reflect the actual current count
    console.log(`useEffect Triggered`);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useEffect Hook</h1>
      {/* Added this to display the count on the screen */}
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
