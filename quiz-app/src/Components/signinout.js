import React, { useState } from 'react';
import './style.css'; // Import your CSS file

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

    const [isSignUpMode, setIsSignUpMode] = useState(false);

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

    const toggleSignUpMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="signin-signup">
                <form onSubmit={handleSignInSubmit} className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
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
                    <p className="account-text">Don't have an account <a href="#" onClick={toggleSignUpMode}>Sign Up</a></p>
                </form>
                <form onSubmit={handleSignUpSubmit} className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
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
                    <p className="account-text">Already have an account <a href="#" onClick={toggleSignUpMode}>Sign In</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignInSignUp;
