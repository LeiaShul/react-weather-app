import React from 'react';
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Weather defaultCity="Kyiv" />

        <footer className="text-center">
          This project was coded by Lesia Shulezhko and is <a href="/">open-sourced on GitHub</a>
        </footer>        
      </div>

    </div>
  );
}

export default App;
