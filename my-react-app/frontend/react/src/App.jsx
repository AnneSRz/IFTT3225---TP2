import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
//components
import HeaderComponent from './components/Header.component';


function App() {

  return (
    <>
      <div className='container min-vw-100 min-vh-100 bg-danger p-0 mx-auto'>
        <HeaderComponent/>

      </div>
    </>
  )
}

export default App


//This is where we will do the layout of the app and will be composed of larger components like :

//The header
//The body
//The footer if needed