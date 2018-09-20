import React, { Component } from 'react';

class DashBoarduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'DashBoardUser'
    };
  }
  componentDidMount() {
    console.log(`${this.state.name} 挂载`);
  }
  render() {
    return <div>{this.state.name} 页面</div>;
  }
}
export default DashBoarduser;
