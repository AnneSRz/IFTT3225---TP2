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
    <div className="container-fluid bg-success min-vh-100 d-flex flex-column" style ={{ backgroundColor: 'FFFFFF' }}>
      
      {/* The header */}
      <div className="row">
        <HeaderComponent/>
      </div>

      {/* The body */}
      <div className="h-100 bg-danger">
        <BodyComponent/>
      </div>

      {/* The footer */}
      <div>
        <FooterComponent/>
      </div>
    </div>

    </>
  );
}

export default App