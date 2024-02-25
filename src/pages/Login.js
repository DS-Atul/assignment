import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/authService";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user data is present in localStorage
        const userData = getUser();

        if (userData) {
            // Do something with userData if needed (e.g., pre-fill the email field)
            setEmail(userData.email);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = getUser();


        if (userData) {
            // const userData = JSON.parse(userData);

            // Check if the entered email and password match the stored user data
            if (userData.email === email && userData.password === pass) {
                // User authenticated successfully, navigate -> homepage
                navigate(`/home?success=Logged in successfully!`);
            } else {
                // Authentication failed, show -> error message
                setError("Invalid email or password.");
            }
        } else {
            // No user data found, show -> error message
            setError("User not registered. Please register first.");
        }
    };

    return (
        <div className="auth-form-container container mt-5 col-5 ">
            <div className="card m-3">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                    {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" className="border border-dark" />
                        <label htmlFor="password">password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" className="border border-dark" />
                        <button className="bg-secondary text-light mt-3 rounded h5" type="submit">LogIn</button>
                    </form>
                    <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
