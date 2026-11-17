import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { 
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.warn("render");

    return (
      <div>
        <h1>counter: {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
      </div>
    );
  }
}

export default Profile;