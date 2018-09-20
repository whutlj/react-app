import React, { Component } from 'react';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'DashBoard'
    };
  }
  componentDidMount() {
    console.log(`${this.state.name} 挂载`);
  }
  render() {
    return <div>{this.state.name} 页面</div>;
  }
}

export default DashBoard;
