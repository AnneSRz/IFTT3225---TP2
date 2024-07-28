import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from '../App';
// icons
import { FaUser } from "react-icons/fa";

const LoginFormComponent = () => {
    // hooks for events
    const [showOverlay, setShowOverlay] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    // hooks for user data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //is user connected
    const { token } = useContext(AuthContext);
    const { setToken } = useContext(AuthContext);
    // Overlay methods to open/close the form
    const handleLoginClick = () => {
        setShowOverlay(true);
    };

    const handleCloseClick = () => {
        setShowOverlay(false);
        setShowRegister(false);
    };

    // Register form or Login form
    const registerFormOn = () => {
        setShowRegister(true);
    };



    //submit for login
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && //Ensures the username is 3-16 characters long and contains only letters, numbers, and underscores.
            password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) { //Requires a password to be at least 8 characters long, containing at least one letter and one number.
                //console.log('Email:', email);
                //console.log('Password:', password);
                
                //fetch for login
                fetch('http://localhost:3000/auth/login', {
                    method: 'POST', //POST because of sensitive data handling
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({ "email":String(email), "password":String(password) }),
                })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => { throw new Error(text); });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Login successful:', data); //data stores the token
                    setToken(data)
                })
                .catch(error => {
                    console.error('Error logging in:', error);
                });
                //END
        } else {

             //TODO : Style the inputs with bg-danger
            console.error('Validation failed');

        }
    };


    const handleSubmitSignup = (e) => {
        e.preventDefault();
        if (username.match(/^[a-zA-Z0-9_]{3,16}$/) && // 3-16 characters long with letters, numbers, and underscores
            password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) && //min 8 characters long with min 1letter and 1number.
            email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){ //basic email regex 
                //console.log(email)
                //console.log(username)
                //console.log(password)
                //fetch for register
                fetch('http://localhost:3000/auth/register', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({ "email":String(email), "username":String(username),"password":String(password) }),
                })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => { throw new Error(text); });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Registration successful:', data);
                    // Handle successful registration (e.g., show a success message or redirect)
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                });
        }else {
            //TODO : Style the inputs with bg-danger
            console.error('Validation failed');
               }
    }






    // lazy hover button effect
    const triggerStyle = {
        color: isHovered ? 'grey' : 'black',
        cursor: 'pointer'
    };

    // html
    return (
        <>
        {/*If connected say welcome*/}
        {token && (<h3 className="col-2 m-0 rounded border-0">Bienvenue :D</h3>)}
        {/*If not, display connection button*/}
        {!token && (
        //navbar element
        <div className="col-2 m-0 rounded border-0" >
            <div className="" // This div is responsible for the hover and overlay toggle
            onClick={handleLoginClick} 
            style={triggerStyle} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            >
                <FaUser />
                <h3>Se connecter</h3>
            </div>

            {/* Conditional rendering of the overlay */}
            {showOverlay && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content"> 

                            <div className="modal-header" style={{ margin: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> {/* login, register, x buttons */}
                                <h5 
                                className="modal-title" 
                                onClick={handleCloseClick} 
                                //add hover style if we have enough time lol...I diiiid it
                                >Se connecter</h5>
                                <h5 
                                className="modal-title"
                                onClick={registerFormOn}
                                //add hover style if we have enough time lol...I diiiid it
                                >S'inscrire</h5>
                                <button type="button" className="bg-secondary" onClick={handleCloseClick}>x</button>
                            </div>

                            <div className="modal-body"> {/* conditionnal rendering of the login or register form */}

                                {/* Login Form */}
                                {showOverlay && !showRegister && (
                                    <form id="login" onSubmit={handleSubmitLogin}>
                                        <div className="form-group">
                                            <label htmlFor="email">Courriel</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                )}

                                {/* Register Form */}
                                {showOverlay && showRegister && (
                                    <form id="register" onSubmit={handleSubmitSignup}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username">Nom d'utilisateur</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </form>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )}
    </>
    )
}

export default LoginFormComponent;
