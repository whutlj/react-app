import React, { Component } from 'react';

class SecondNest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'SecondNest'
    };
  }
  componentDidMount() {
    console.log(`${this.state.name} 挂载`);
  }
  render() {
    return (
      <div>
        {this.state.name} 页面
        <div>这里是第三嵌套</div>
      </div>
    );
  }
}
export default SecondNest;
