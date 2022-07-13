import React, { useState } from 'react';

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <div className="actions">
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default HelloWorld;
