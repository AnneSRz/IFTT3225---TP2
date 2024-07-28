import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
//components
import HeaderComponent from './components/Header.component';
import BodyComponent from './components/Body.component';
import FooterComponent from './components/Footer.component'

function App() {

  return (
    <>
    <div className="d-flex flex-column min-vh-100" style ={{ backgroundColor: '#FDFDD2' }}>
        <HeaderComponent/>
        <div className = 'flex-grow-1'>
          <BodyComponent/>
        </div>
        <FooterComponent/>
    </div>
    </>
  );
}

export default App