import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DoneRecipes from './pages/DoneRecipes.jsx';
import Explore from './pages/Explore.jsx';
import ExploreIngredient from './pages/ExploreIngredient.jsx';
import ExploreNationality from './pages/ExploreNationality.jsx';
import ExploreSelect from './pages/ExploreSelect';
import Login from './pages/Login.jsx';
import MainPage from './pages/MainPage.jsx';
import NotFound from './pages/NotFound.jsx';
import Profile from './pages/Profile.jsx';
import Recipe from './pages/Recipe.jsx';
import RecipeInProgress from './pages/RecipeInProgress.jsx';

function App() {
  return (
    <div className="h-screen font-poppins">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/foods" element={ <MainPage /> } />
        <Route path="/drinks" element={ <MainPage /> } />
        <Route path="/foods/:id" element={ <Recipe /> } />
        <Route path="/drinks/:id" element={ <Recipe /> } />
        <Route path="/foods/:id/in-progress" element={ <RecipeInProgress /> } />
        <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/foods" element={<ExploreSelect />} />
        <Route path="/explore/drinks" element={<ExploreSelect />} />
        <Route path="/explore/foods/ingredients" element={<ExploreIngredient />} />
        <Route path="/explore/drinks/ingredients" element={<ExploreIngredient />} />
        <Route path="/explore/foods/nationalities" element={<ExploreNationality />} />
        <Route path='/done-recipes' element={<DoneRecipes />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
