import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref count: ${refCount.current}`);
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <p>State Count: {stateCount}</p>
        <button className="button" onClick={incrementStateCount}>
          increment state count
        </button>

        <p>Ref Count: {refCount.current}</p>
        <button className="button" onClick={incrementRefCount}>
          increment ref count
        </button>
      </div>
    </div>
  );
}

export default App;
