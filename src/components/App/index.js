import React from 'react';
import './styles.css';

const App = () => {
  return (
    <>
      <h1 class="app">My App</h1>
      <p class="app--faces">
        <span role="img"  aria-label="bad baby">&#129314;</span>
        <span role="img" aria-label="good baby">&#128118;</span>
      </p>
    </>
  );
};

export default App;