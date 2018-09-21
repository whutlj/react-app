import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
const getConfirmation = (message, cb) => {
  const allowTransition = window.confirm(message);
  cb(allowTransition);
};
ReactDOM.render(
  <Router basename="/app">
    <Route component={App} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
