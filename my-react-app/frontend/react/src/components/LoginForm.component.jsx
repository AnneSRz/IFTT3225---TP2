import React, { useState } from 'react';
// icons
import { FaUser } from "react-icons/fa";

const LoginFormComponent = () => {
    // hooks for events
    const [showOverlay, setShowOverlay] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    // hooks for data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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

    const registerFormOff = () => {
        setShowRegister(false);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // TODO: Send an HTTP request to the server with email, username, and password
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.match(/^[a-zA-Z0-9_]{3,16}$/) && //Ensures the username is 3-16 characters long and contains only letters, numbers, and underscores.
            password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) { //Requires a password to be at least 8 characters long, containing at least one letter and one number.
            
                //TODO : Style the inputs with bg-success
                // TODO: Send an HTTP request to the server with username and password
        } else {

             //TODO : Style the inputs with bg-danger
            console.error('Validation failed');

        }
    };

    // lazy hover button effect
    const triggerStyle = {
        color: isHovered ? 'grey' : 'black',
        cursor: 'pointer'
    };

    // html
    return (
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
                                onClick={registerFormOff} 
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
                                    <form id="login" onSubmit={handleSubmit}>
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
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                )}

                                {/* Register Form */}
                                {showOverlay && showRegister && (
                                    <form id="register" onSubmit={handleRegisterSubmit}>
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
    );
};

export default LoginFormComponent;
