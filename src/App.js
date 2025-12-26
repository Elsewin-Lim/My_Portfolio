import React from 'react';
import Book from './components/Book';
import FlipThePhone from './components/FlipThePhone';
import './App.css';

function App() {
  return (
    <div className = "webLayout">
        <FlipThePhone />
      <div className="container">
        <Book />
      </div>
    </div>

  );
}

export default App;
