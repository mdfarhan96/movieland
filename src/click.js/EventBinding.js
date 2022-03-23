import React, { Component } from "react";

class EventBinding extends Component {
  state = {
    message: "welcome",
  };
  ClickHandler() {
    // this.state.message="goodbye"

    this.setState({ message: "bye bye" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.ClickHandler.bind(this)}>click</button>
      </div>
    );
  }
}

export default EventBinding;
