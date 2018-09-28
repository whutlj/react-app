let nextTodoId = 0;
const firstAction = () => ({
  type: 'ADD',
  payload: 10
});
const reduceAction = () => ({
  type: 'REDUCE',
  payload: 1
});

const addTodo = (demo) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  demo: demo
});
const reduceTodo = (id) => ({
  type: 'REDUCE_TODO',
  id: id
});
const otherDemo = () => ({
  type: 'OTHER'
});

export { firstAction, reduceAction, addTodo, reduceTodo, otherDemo };
