import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 展示组件
export default class Todo extends Component {
  render() {
    const { onClick, demo, completed } = this.props;
    const renderHtml = (
      <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : '' }}>
        {demo}
      </li>
    );
    return renderHtml;
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  demo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
