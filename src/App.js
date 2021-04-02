import React, { useState } from "react";
import "./styles/style.css";
import Input from "./components/Input";
import Output from "./components/Output";
import text from "./text.js";

function App() {
  const inputDefault = text;
  const [input, setInput] = useState(inputDefault);

  return (
    <div className="App">
      <Input input={input} setInput={setInput} inputDefault={inputDefault} />
      <Output input={input} />
    </div>
  );
}

export default App;
