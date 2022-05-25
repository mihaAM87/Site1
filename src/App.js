import React, { Component } from 'react';
//import 'react-select/dist/react-select.css'
import MainContent from './components/mainContent';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ModalState } from './context/modal/ModalState';
import Modal from './components/content/modal/modal';

export default function () {
  return (
    <div className="App">
      <ModalState>
        <BrowserRouter>
          <Modal />
          <MainContent />
        </BrowserRouter>
      </ModalState>
    </div>
  );
}
