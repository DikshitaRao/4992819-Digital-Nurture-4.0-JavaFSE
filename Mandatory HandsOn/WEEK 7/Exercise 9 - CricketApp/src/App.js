import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
    const [flag, setFlag] = useState(true);

    return (
        <div className="App">
            <button onClick={() => setFlag(!flag)}>
                Toggle View (Current: {flag ? "ListofPlayers" : "IndianPlayers"})
            </button>

            {flag ? <ListofPlayers /> : <IndianPlayers />}
        </div>
    );
}

export default App;