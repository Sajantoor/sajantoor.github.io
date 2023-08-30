import React from 'react';
import { useEffect } from 'react';
import './App.css'
import './assets/fonts/fonts.css';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // check if the user has entered "/resume" in the url 
    const path = window.location.pathname;

    if (path !== "/resume") {
      return;
    }

    // Simulate a click on the hidden download link and download the resume
    const downloadLink = document.createElement('a');
    downloadLink.href = '../assets/Resume - Sajan Toor.pdf';
    downloadLink.download = 'Resume - Sajan Toor.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
