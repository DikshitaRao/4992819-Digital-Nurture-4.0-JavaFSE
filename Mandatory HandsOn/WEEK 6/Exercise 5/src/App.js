// src/App.js
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
    const cohorts = [
        { name: "React Bootcamp", mentor: "Alice", status: "ongoing" },
        { name: "Java Basics", mentor: "Bob", status: "completed" }
    ];

    return (
        <div className="App">
            {cohorts.map((cohort, index) => (
                <CohortDetails key={index} cohort={cohort} />
            ))}
        </div>
    );
}

export default App;
