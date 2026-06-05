import React from 'react';
import { useState } from 'react';
import Book from './components/Book';
import FlipThePhone from './components/FlipThePhone';
import getUserLang  from "./components/getUserLang";
import './App.css';

function App() {
  const [Lang, setLang] = useState(getUserLang());
  return (
    <div className = "webLayout">
        <FlipThePhone Lang = {Lang} />
      <div className="container">
        <Book setLang = {setLang} Lang = {Lang} />
      </div>
    </div>

  );
}

export default App;
