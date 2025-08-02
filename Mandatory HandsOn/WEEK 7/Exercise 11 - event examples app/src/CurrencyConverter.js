import React, { useState } from 'react';

function CurrencyConverter() {
    const [rupees, setRupees] = useState('');
    const [euros, setEuros] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Conversion rate: 1 EUR = ~90 INR (adjust as needed)
        const convertedValue = parseFloat(rupees) / 90;
        setEuros(convertedValue.toFixed(2));
    };

    return (
        <div>
            <h2>Currency Converter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Indian Rupees:</label>
                    <input
                        type="number"
                        value={rupees}
                        onChange={(e) => setRupees(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Convert to Euros</button>
            </form>
            {euros && <p>Euro Amount: €{euros}</p>}
        </div>
    );
}

export default CurrencyConverter;