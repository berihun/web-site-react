import "./App.css";
import { use, useState } from "react";

function App() {
  // useState example
  const [FormData, setFromData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFromData({
      ...FormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-container">
      <h1>Form Example</h1>
      <form>
        <div className="">
          <div className="form-field">
            <label>Text:</label>
            <input
              type="text"
              name="text"
              value={FormData.text}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form-field">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                checked={FormData.checkbox}
                onChange={handleChange}
              ></input>
              Checkbox
            </label>
          </div>

          <div className="form-field">
            <label>
              <input
                type="radio"
                name="radio"
                checked={FormData.radio === "option 1"}
                onChange={handleChange}
                value="option 1"
              ></input>
              Option 1
            </label>

            <label>
              <input
                type="radio"
                name="radio"
                checked={FormData.radio === "option 2"}
                onChange={handleChange}
                value="option 2"
              ></input>
              Option 2
            </label>
          </div>

          <div className="form-field">
            <label>Select:</label>
            <select
              name="select"
              value={FormData.select}
              onChange={handleChange}
            >
              <option value="">-- Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="form-data">
            <h3>Form Data</h3>
            <p>
              <strong>Text:</strong>
              {FormData.text || "N/A"}
            </p>
            <p>
              <strong>Checkbox:</strong>
              {FormData.checkbox ? "Checked" : "Unchecked"}
            </p>
            <p>
              <strong>Radio:</strong>
              {FormData.radio || "N/A"}
            </p>

            <p>
              <strong>Select:</strong>
              {FormData.select || "N/A"}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
