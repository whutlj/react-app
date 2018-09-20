import React, { PureComponent, Component } from 'react';

export default class DefinePureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  // shouldComponentUpdate() {
  //   return true;
  // }
  render() {
    return this.props.children;
  }
}
