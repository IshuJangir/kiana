import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Team from './components/ui/Team';
import Contact from './components/ui/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/kiana">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
