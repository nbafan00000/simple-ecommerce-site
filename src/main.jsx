import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app-shell">
      <h1>Northline Goods</h1>
      <p>Simple goods for daily routines.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
