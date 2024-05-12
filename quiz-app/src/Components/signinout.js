import React from 'react';
import { useState } from 'react';
import './style.css'; // Assuming you have the CSS file in the same directory as your component

function SignInSignUp() {
    const [signInFormData, setSignInFormData] = useState({
        username: '',
        password: ''
    });

    const [signUpFormData, setSignUpFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSignInFormChange = (e) => {
        const { name, value } = e.target;
        setSignInFormData({ ...signInFormData, [name]: value });
    };

    const handleSignUpFormChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({ ...signUpFormData, [name]: value });
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Handle sign in form submission
        console.log("Sign In Form Data:", signInFormData);
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle sign up form submission
        console.log("Sign Up Form Data:", signUpFormData);
    };

    return (
        <div className="container">
            <div className="signin-signup">
                <form onSubmit={handleSignInSubmit} className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" name="username" value={signInFormData.username} onChange={handleSignInFormChange} required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" value={signInFormData.password} onChange={handleSignInFormChange} required />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        {/* Social media icons */}
                    </div>
                    <p className="account-text">Don't have an account <a href="#" id="sign-up-btn2">Sign Up</a></p>
                </form>
                <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" name="username" value={signUpFormData.username} onChange={handleSignUpFormChange} required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Email" name="email" value={signUpFormData.email} onChange={handleSignUpFormChange} required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" value={signUpFormData.password} onChange={handleSignUpFormChange} required />
                    </div>
                    <input type="submit" value="Sign up" className="btn" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                        {/* Social media icons */}
                    </div>
                    <p className="account-text">Already have an account <a href="#" id="sign-in-btn2">Sign In</a></p>
                </form>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Quiz App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo fugit adipisci sequi doloremque error culpa repellendus beatae quibusdam excepturi ipsum illum consectetur nihil, maiores recusandae voluptatum autem maxime vel.</p>
                        <button className="btn" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src="1.svg.svg" alt="" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Solve the Quiz Online</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo fugit adipisci sequi doloremque error culpa repellendus beatae quibusdam excepturi ipsum illum consectetur nihil, maiores recusandae voluptatum autem maxime vel.</p>
                        <button className="btn" id="sign-up-btn">Sign up</button>
                    </div>
                    <img src="2.svg.svg" alt="" className="image" />
                </div>
            </div>
        </div>
    );
}

export default SignInSignUp;
