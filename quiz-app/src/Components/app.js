import React, { useState } from 'react';
import './style.css'; // Assuming you have the CSS file in the same directory as your component

function SignInSignUp() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isSignUpMode2, setIsSignUpMode2] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleSignUpClick2 = () => {
        setIsSignUpMode2(true);
    };

    const handleSignInClick2 = () => {
        setIsSignUpMode2(false);
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} ${isSignUpMode2 ? 'sign-up-mode2' : ''}`}>
            {/* Assuming these buttons are present in your JSX */}
            <button id="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
            <button id="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
            <button id="sign-up-btn2" onClick={handleSignUpClick2}>Sign Up 2</button>
            <button id="sign-in-btn2" onClick={handleSignInClick2}>Sign In 2</button>
        </div>
    );
}

export default SignInSignUp;
