import React, { Component } from 'react';
//import 'react-select/dist/react-select.css'
import MainContent from './components/mainContent';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

export default function () {
  return (
    <div className="App">
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
}
