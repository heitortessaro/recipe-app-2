import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
