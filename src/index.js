import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import CountersPage from './pages/CountersPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CountersPage />
  </React.StrictMode>
);