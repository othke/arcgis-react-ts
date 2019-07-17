import React, { useState, useRef, useEffect } from 'react';
import Map from './Map';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>React Application</h2>
      <div style={{ display: 'flex' }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div style={{ margin: '5px' }}>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Map />
    </div>
  );
};

export default App;
