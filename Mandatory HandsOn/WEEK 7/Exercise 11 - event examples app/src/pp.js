import React from 'react';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>React Event Examples</h1>
            <Counter />
            <CurrencyConverter />
        </div>
    );
}

export default App;