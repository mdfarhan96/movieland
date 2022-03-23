import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "farhan",
    };
    console.log("lifecyle :constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecyle :getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecyle :componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("lifecyle : shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecyle :getSnapshotBeforeUpdate ");
    return null;
  }
  componentDidUpdate() {
    console.log("lifecyle : componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "farhan",
    });
  };

  render() {
    console.log("lifecyle :render");
    return (
      <div>
        <div>Lifecycle</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default Lifecycle;
