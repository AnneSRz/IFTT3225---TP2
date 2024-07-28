import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css'
//components
import HeaderComponent from './components/Header.component';
import BodyComponent from './components/Body.component';
import FooterComponent from './components/Footer.component'

function App() {

  return (
    <AuthProvider>
      <div className="d-flex flex-column min-vh-100" style ={{ backgroundColor: '#FDFDD2' }}>
          <HeaderComponent/>
          <div className = 'flex-grow-1'>
            <BodyComponent/>
          </div>
          <FooterComponent/>
      </div>
    </AuthProvider>
  );
}

export default App



//react context 
const AuthContext = createContext();
// Wraps around the app so we can store / access the authentication token
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    return (
      //we use AuthContext.Provider to pass down the token and setToken values
        <AuthContext.Provider value={{ token, setToken }}>
            {children} 
        </AuthContext.Provider>
    );
};

export {AuthContext}
//we can access the token and the setToken method by deconstructuring with     const { token } = useContext(AuthContext);