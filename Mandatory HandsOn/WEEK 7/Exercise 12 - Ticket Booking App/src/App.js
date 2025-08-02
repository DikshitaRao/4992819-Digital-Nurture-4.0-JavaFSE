import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
    // State to track if user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    // Conditional rendering based on login status
    return (
        <div className="App">
            {isLoggedIn ? (
                <UserPage onLogout={handleLogout} />
            ) : (
                <GuestPage onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;