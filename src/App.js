import React from 'react';
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Weather defaultCity="Kyiv" />

               
      </div>
      <footer className="text-center text-muted font-monospace">
        This project was coded by Lesia Shulezhko and is <a class="link" href="https://github.com/LeiaShul/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer> 
    </div>
  );
}

export default App;
