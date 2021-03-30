import React, { useState } from "react";
import "./styles/style.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const inputDefault = "# yooo waddup \n## this works";
  const [input, setInput] = useState(inputDefault);

  return (
    <div className="App">
      <Input input={input} setInput={setInput} inputDefault={inputDefault} />
      <Output input={input} />
    </div>
  );
}

export default App;
