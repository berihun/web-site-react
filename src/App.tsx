import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="div">
      <h2>Forms in React </h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          // value={0}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default App;
