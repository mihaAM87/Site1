import React, { Component } from 'react'
//import 'react-select/dist/react-select.css'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import MainContent from './components/mainContent'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContent />
      </div>);
  }
}

export default App;
