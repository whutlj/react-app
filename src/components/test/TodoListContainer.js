import { connect } from 'react-redux';
// 因引入展示组件
import TodoList from './TodoList';
import { reduceTodo } from '@/actions/first';
// 创建容器组件将展示组件与Redux关联起来，容器组件就是使用store.subscribe,从redux state树中读取数据，通过props传递给展示组件，react-redux中
// 提供connect()方法生成容器组件，这个方法做了性能优化来避免重复的渲染。使用connect需要定义mapStateToProps,mapDispatchToProps
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};
// mapStateToProps 获取数据
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
// mapDispatchToProps 分发action
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(reduceTodo(id));
    }
  };
};
// 创建容器组件
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
