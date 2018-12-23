import React, { Component } from 'react';
import Home from './pages/home';
import './css/common.css';
import ErrorBoundry from './components/error_boundry'

class App extends Component {
  render() {
    return (
      <ErrorBoundry><Home/></ErrorBoundry>
    );
  }
}

export default App;
