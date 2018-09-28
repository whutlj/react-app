import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
// import Main from '@/components/Main';
import Main from '@/components/MainTwo';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <Router basename="/app">
        <Route
          path="/"
          component={Main}
        />
      </Router>
    );
  }
}
export default App;
