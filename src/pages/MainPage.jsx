import React, { useId } from 'react';
import { useLocation } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import CardShelf from '../components/CardShelf';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenericRecipes } from '../Redux/features/userActions/getGenericRecipes';
import { cancelAvoidFetch } from '../Redux/features/userSlice';
import randomIdNumber from '../helpers/randomIdNumber';

export default function MainPage() {
  const location = useLocation();
  const title = location.pathname.includes('foods')? 'Foods' : 'Drinks';
  const { avoidFetchAtLoad, searchedRecipes, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!avoidFetchAtLoad) {
      dispatch(getGenericRecipes(title.toLowerCase()));
    }
    if (avoidFetchAtLoad) { dispatch(cancelAvoidFetch); }
  }, []);
  // useEffect(() => { getCategories(); }, []);

  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={true} title={title}/>
      <SearchBar /> 
      {/* <Alert /> */}
      {searchedRecipes.length > 0 && !loading && (
        <CardShelf>
          {searchedRecipes.map((rec) => (
            <RecipeCard 
              key={randomIdNumber()}
              id={ rec.idMeal }
              imageSrc={ rec.strMealThumb }
              title={ rec.strMeal }
              type={title.toLowerCase()}
            />
          ))};
        </CardShelf>
      )}
      <FooterMenu />
    </div>
  );
}