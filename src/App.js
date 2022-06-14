import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/ranking" element={<Ranking />} /> */}

        {/* <Route  path="/" component={ Login } />
        <Route  path="/foods" component={ Foods } />
        <Route  path="/drinks" component={ Drinks } />
        
        <Route  path="/foods/:id" component={ Recepie } />
        <Route  path="/drinks/:id" component={ Recepie } />
        
        <Route  path="/foods/:id/in-progress" component={ RecepieInProgres } />
        <Route  path="/drinks/:id/in-progress" component={ RecepieInProgres } />
        
        <Route  path="/explore" component={ Explore } />
        <Route  path="/explore/foods" component={ ExploreFoods } />
        <Route  path="/explore/drinks" component={ ExploreDrinks } />
        
        <Route  path="/explore/foods/ingredients" component={ ExploreIngredients } />
        <Route 
          path="/explore/drinks/ingredients"
          component={ ExploreIngredients }
        />
        <Route
          
          path="/explore/foods/nationalities"
          component={ ExploreNacionalities }
        />
        
        <Route  path="/profile" component={ Profile } />
        <Route  path="/done-recipes" component={ DoneRecipes } />
        <Route
          
          path="/favorite-recipes"
          component={ FavoriteRecipies }
        />
        <Route path="/explore" component={ NotFound } /> */}
      </Routes>
    </div>
  );
}

export default App;
