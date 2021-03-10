import React from "react";
import "./styles/style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange(input) {
    this.setState({ input });
  }

  render() {
    return (
      <div className="App">
        <section>
          <h2>Input</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={this.state.input}
            onChange={(e) => {
              this.handleChange(e.target.value);
            }}
          ></textarea>
        </section>
        <section>
          <h2>output</h2>
          <div className="output">{this.state.input}</div>
        </section>
      </div>
    );
  }
}
