import { combineReducers } from 'redux';
import { deepCopy } from '@/assets/js/utils';
const initState = {
  count: 0,
  user: {
    age: 23,
    name: 'whutlj'
  },
  todos: []
};

// 主reducer，调用多个reducer 处理state中的一部分数据
/**
 *
 * @param {Object} state state中的count
 * @param {Object} action 动作
 */
const handleCount = (state = initState.count, action) => {
  console.log('调用++++');
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'REDUCE':
      return state - action.payload;
    case 'OTHER':
      return state + 1;
    default:
      return state;
  }
};
/**
 * 主负责tidos列表
 * @param {Object} state state中的todo
 * @param {Object} action 动作
 */
const handleTodo = (state = initState.todos, action) => {
  console.log('调用----');
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: 'ADD TODO', demo: action.demo, completed: false, id: action.id }];
    case 'REDUCE_TODO':
      return state.map((item) => (item.id === action.id ? { ...item, completed: !item.completed } : item));
    // let arr = [];
    // if (state.length > 0) {
    //   arr = deepCopy(state);
    //   arr.splice(0, 1);
    // }
    // return arr;
    default:
      return state;
  }
};
// /**
//  *
//  * @param {Object} state  总的state
//  * @param {Object} action 动作
//  */
// const combineMain = (state, action) => {
//   return {
//     todos: handleTodo(state.todos, action),
//     count: handleCount(state.count, action)
//   };
// };
/**
 * 这样可以减少模板语法，与上面注释的完全相同
 */
const combineMain = combineReducers({
  todos: handleTodo,
  count: handleCount
});

/**
 * 1、不要修改传入的参数
 * 2、在default的情况下返回旧的state
 * @param {Object} state 状态
 * @param {Object} action 动作
 */
const counter = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case 'REDUCE':
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
};

// export { counter, combineMain };
export default combineMain;
export { counter };
