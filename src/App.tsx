import React, { useEffect } from 'react';
import Routes from './routes';

function App() {
  useEffect(() => {
    const elem = document.getElementById('starting-loader');
    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  }, []);
  return <Routes />;
}

export default App;
