import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    function ClickHandler() {
      console.log("you clicked");
    }
    return (
      <div>
        <button onClick={ClickHandler}>click</button>
        <p>whatsup</p>
      </div>
    );
  }
}

export default ClassClick;
