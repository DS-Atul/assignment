import React from 'react';
import { useNavigate } from "react-router-dom";
import { getUser, removeUser } from '../services/authService';

const Dashboard = () => {
    const user = getUser();
    const Navigate = useNavigate();

    if (!user) {
        Navigate('/login');
        return null;
    }

    const handleLogout = () => {
        removeUser();
        Navigate('/login');
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h2>Welcome, {user.name}!</h2>
                <h3>Successfully logged in to the Dashboard</h3>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
