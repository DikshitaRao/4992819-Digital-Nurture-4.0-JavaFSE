import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const sayHello = () => {
        alert('Hello! This is a static message.');
    };

    const handleIncrement = (e) => {
        incrementCount();
        sayHello();
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const handleSyntheticEvent = (e) => {
        alert('I was clicked');
    };

    return (
        <div>
            <h2>Counter Example</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>

            <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>

            <button onMouseDown={handleSyntheticEvent}>Click me for Synthetic Event</button>
        </div>
    );
}

export default Counter;