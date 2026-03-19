import React, { useState } from 'react';
import './Change.scss';
import { useParams } from 'react-router-dom';

const Change = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const { email } = useParams()
    console.log(email);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                const response = await fetch('/change', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email, newPassword: password }),
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {

                } else {
                    console.error(data.error || 'Failed to change password');
                }
            } catch (error) {
                console.error('Error changing password:', error);
            }
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <div className="change-container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {!passwordsMatch && <p>Passwords do not match!</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Change;
