import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import combineMain from '@/reducers/first';
import rootReducer from '@/reducers/reddit';
// import {
//   firstAction,
//   reduceAction,
//   addTodo,
//   reduceTodo,
//   otherDemo
// } from '@/actions/first';
// ReactDOM.render(<App />, document.getElementById('root'));
// import createBrowserHistory from 'history/createBrowserHistory';
// const getConfirmation = (message, cb) => {
//   const allowTransition = window.confirm(message);
//   cb(allowTransition);
// };
const store = createStore(
  rootReducer
);
console.log(store.getState());
store.subscribe(() => {
  console.log('store改变');
  console.log(
    store.getState()
  );
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(
    'root'
  )
);
registerServiceWorker();
