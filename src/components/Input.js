function Input({ input, setInput, inputDefault }) {
  const handleChange = (input) => {
    setInput(input);
  };

  const handleClick = () => {
    setInput(inputDefault);
  };

  return (
    <section>
      <div className="section-heading">
        <h2>Input</h2>
        <button onClick={handleClick}>Reset</button>
      </div>
      <textarea
        className="input"
        name="input"
        value={input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></textarea>
    </section>
  );
}

export default Input;
