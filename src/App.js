import React, { useState } from "react";
import "./styles/style.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { inputDefault } from "./data/inputDefault";

const App = () => {
  const [input, setInput] = useState(inputDefault);

  return (
    <div className="App">
      <Input input={input} setInput={setInput} inputDefault={inputDefault} />
      <Output input={input} />
    </div>
  );
};

export default App;
