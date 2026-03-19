import React, { useState } from 'react';
import './Forgot.scss';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch request to backend endpoint
        fetch('/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsValidEmail(data.isValid);
                if (data.isValid) {
                    alert("Please change password")
                    navigate(`/change/${email}`)
                }
                else {
                    alert("invalid email")
                    navigate("/")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
            });
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot password</h2>
            <form onSubmit={handleSubmit} className='forgot-password-form'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="forgot-password-input"
                />
                <button type="submit" className="forgot-password-submit">
                    Submit
                </button>
            </form>
        </div>
    );

}

export default ForgotPasswordForm;
