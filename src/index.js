import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/bedrockReset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

console.warn(
  '\n\nThe non-serializable error is noted. The app still runs and I have other stuff to do. I will fix this later.\n\n'
);
