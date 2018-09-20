import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
const getConfirmation = (message, cb) => {
  const allowTransition = window.confirm(message);
  cb(allowTransition);
};
ReactDOM.render(
  <BrowserRouter basename="/app">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
