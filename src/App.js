import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore.jsx';
import ExploreSelect from './pages/ExploreSelect';
import Login from './pages/Login.jsx';
import MainPage from './pages/MainPage.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="h-screen font-poppins">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/foods" element={ <MainPage /> } />
        <Route path="/drinks" element={ <MainPage /> } />

        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/foods" element={<ExploreSelect />} />
        <Route path="/explore/drinks" element={<ExploreSelect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
