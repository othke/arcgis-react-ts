import React, { useState, useRef, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div style={{ margin: '5px' }}>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
