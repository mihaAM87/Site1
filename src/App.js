import React, { Component } from 'react';
//import 'react-select/dist/react-select.css'
import MainContent from './components/mainContent';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
