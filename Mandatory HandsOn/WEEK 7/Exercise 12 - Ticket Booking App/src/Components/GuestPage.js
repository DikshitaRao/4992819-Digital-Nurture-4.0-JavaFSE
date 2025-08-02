import React from 'react';

const GuestPage = ({ onLogin }) => {
    const flights = [
        { id: 1, from: 'New York', to: 'London', price: '$599', time: '10:30 AM' },
        { id: 2, from: 'Paris', to: 'Tokyo', price: '$899', time: '2:15 PM' },
        { id: 3, from: 'Mumbai', to: 'Dubai', price: '$299', time: '8:45 PM' }
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>Flight Information - Guest View</h1>
                <button className="button" onClick={onLogin}>
                    Login
                </button>
            </div>

            <h2>Available Flights</h2>
            {flights.map(flight => (
                <div key={flight.id} className="flight-card">
                    <h3>{flight.from} → {flight.to}</h3>
                    <p>Departure: {flight.time}</p>
                    <p>Price: {flight.price}</p>
                    <p><em>Please login to book tickets</em></p>
                </div>
            ))}
        </div>
    );
};

export default GuestPage;