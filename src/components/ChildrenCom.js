import React, { Component } from 'react';

export default class ChildCom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, age } = this.props;
    console.log(name);
    return <div>123</div>;
  }
}
