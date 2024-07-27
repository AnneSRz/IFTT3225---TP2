import React from 'react';
import ReactDOM from 'react-dom/client';
//import {ReactDOM} from '../../../node_modules/react-dom'
//import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//Sauce this is the root, you can ignore this file