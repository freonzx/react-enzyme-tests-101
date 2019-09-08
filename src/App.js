import React, { Component } from "react";
import Header from "./Header";
import "./styles.css";

class App extends Component {
  state = {
    show: true
  };

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        {show ? <Header name={"CodeSandBox"} /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Hide
        </button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
