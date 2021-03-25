import React, { useState } from "react";
// import "./styles/reset.css";
import "./styles/style.css";
import marked from "marked";

function App() {
  const [input, setInput] = useState("# yooo waddup \n## this works");

  return (
    <div className="App">
      <Input input={input} setInput={setInput} />
      <Output input={input} />
    </div>
  );
}

function Input({ input, setInput }) {
  const handleChange = (input) => {
    setInput(input);
  };

  return (
    <section>
      <h2 className="section-heading">Input</h2>
      <textarea
        className="input"
        name="input"
        cols="30"
        rows="50"
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></textarea>
    </section>
  );
}

function Output({ input }) {
  return (
    <section>
      <h2 className="section-heading">output</h2>
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      ></div>
    </section>
  );
}

export default App;
