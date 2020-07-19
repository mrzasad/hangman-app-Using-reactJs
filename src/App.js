import React from 'react';
import './App.css';
import Hangman from './Hangman';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Hangman/>
    </div>
  );
}

export default App;
