import "./App.css";
import { useState, useRef } from "react";

function App() {
  // --- prop drilling---------------------
  // - App =DATA
  //  - ComponentA
  //   - ComponentB
  //    - ThemedComponent == NEEDS THEME
  // --------end

  // props drilling is difficult to maintain and
  // not recommended especially if the application complexity is growing
  // so useContext resolves this issue

  const theme = "dark";
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>App(Parent)</h2>
      <ComponentA theme={theme} />
    </div>
  );
}
function ComponentA({ theme }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ComponentA(Child)</h2>
      <ComponentB theme={theme} />
    </div>
  );
}

function ComponentB({ theme }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ComponentB(Grand Child)</h2>
      <ThemedComponent theme={theme} />
    </div>
  );
}

function ThemedComponent({ theme }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>ThemedComponent(Great Grand Child)</h2>
      The current theme is :{theme}
    </div>
  );
  return <div>The current theme is :{theme} </div>;
}
export default App;
