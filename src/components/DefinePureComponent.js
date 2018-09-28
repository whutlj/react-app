import React from 'react';

export default class DefinePureComponent extends React.PureComponent {
  render() {
    return this.props.children;
  }
}
