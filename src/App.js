import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
