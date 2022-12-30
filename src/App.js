import React from 'react';
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Weather defaultCity="Kyiv" />              
      </div>
      <footer className="text-center fs-6 text-muted font-monospace">
        This project was coded by <a href='https://lesia-shulezhko-front-end.netlify.app/index.html' target="_blank" rel="noreferrer" className="link">Lesia Shulezhko</a>  and is <a className="link" href="https://github.com/LeiaShul/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer> 
    </div>
  );
}

export default App;
