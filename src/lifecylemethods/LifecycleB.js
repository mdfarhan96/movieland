import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "farhan",
    };
    console.log("lifecyleB :constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecyleB :getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifecyleB :componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("lifecyleB : shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecyleB :getSnapshotBeforeUpdate ");
    return null;
  }
  componentDidUpdate() {
    console.log("lifecyleB : componentDidUpdate");
  }

  render() {
    console.log("lifecyleB :render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
