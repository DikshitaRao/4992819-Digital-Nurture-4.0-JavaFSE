import React from 'react';
import officeSpaces from './data/officeSpaces';

function App() {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Office Space Rental</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {officeSpaces.map((office) => (
                    <div
                        key={office.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h2 style={{ marginTop: '0' }}>{office.name}</h2>
                        <img
                            src={office.image}
                            alt={office.name}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                        <p><strong>Address:</strong> {office.address}</p>
                        <p>
                            <strong>Rent:</strong>
                            <span style={{
                                color: office.rent < 60000 ? 'red' : 'green',
                                fontWeight: 'bold'
                            }}>
                ₹{office.rent.toLocaleString()}/month
              </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;