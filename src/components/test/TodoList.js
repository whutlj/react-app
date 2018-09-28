import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import LoadingComponent from '../common/LoadingComponent';
// react-redux提供connect()方法来创建容器组件，将redux数据与展示组件关联起来

const Todo = Loadable({
  loader: () => import('./Todo'),
  loading: LoadingComponent
});

export default class TodoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props;
    console.log(this.props);
    return (
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      demo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};
