import "./App.css";
import { useState, useRef, createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  // props drilling is difficult to maintain and
  // not recommended especially if the application complexity is growing
  // so useContext resolves this issue
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <h2>App(Parent)</h2>
        <button onClick={toggleTheme}>Tggle Click</button>
        <ComponentA />
      </div>
    </ThemeContext.Provider>
  );
}
function ComponentA() {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ComponentA(Child)</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ComponentB(Grand Child)</h2>
      <ThemedComponent />
    </div>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ThemedComponent(Great Grand Child)</h2>
      The current theme is :{theme}
    </div>
  );
  return <div>The current theme is :{theme} </div>;
}
export default App;
