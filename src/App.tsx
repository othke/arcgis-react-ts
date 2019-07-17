import React, { useState, useRef, useEffect } from 'react';
import Counter from './Counter';
import Map from './Map';

const App = () => {
  return (
    <div>
      <h2>React Application</h2>
      <Counter />
      <Map />
    </div>
  );
};

export default App;
