import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGenericRecipes = createAsyncThunk(
  'user/getGenericRecipes',
  // async(type, { rejectWithValue }) => {
  async(type) => {
    let url = '';
    if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; }
    if (type === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; }
    try {
      const resolve = await fetch(url);
      const data = await resolve.json();
      let recepies = [];
      if (type === 'foods') { recepies = data.meals; }
      if (type === 'drinks') { recepies = data.drinks; }
      return recepies;
    } catch (error) {
      console.log('fetchGenericRecepies error');
      // return rejectWithValue(error)
    }
  }
);