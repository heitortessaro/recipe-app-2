import { createSlice } from '@reduxjs/toolkit';
import { getGenericRecipes } from './userActions/getGenericRecipes';

const INITIAL_STATE = {
  searchBarActive: false,
  loading: false,
  searchedRecipes: [],
  searchedIngredients: [],
  avoidFetchAtMainPage: false,
  recepieID: '',
  favoriteLocalStorange: [],
  userEmail: '',
  mealsToken: '',
  cocktailsToken: '',
}

export const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserInfo: (state, {payload}) => {
      state.userEmail = payload.email;
      state.mealsToken = payload.mealsToken;
      state.cocktailsToken = payload.cocktailsToken;
    },
    setLoading: (state, _action) => {
      state.loading = true;
    },
    // saveSearchedRecipes: (state, {payload}) => {
    //   state.searchedRecipes = payload;
    //   state.loading = false;
    // },
    handleSearchBar: (state, _action) => {
      state.searchBarActive = !state.searchBarActive;
    },
    // saveSearchedIngredients: (state, {payload}) => {
    //   state.searchedIngredients = payload;
    //   state.loading = false;
    // },
    setAvoidFetch: (state, _action) => {
      state.avoidFetchAtMainPage = true;
    },
    cancelAvoidFetch: (state, _action) => {
      state.avoidFetchAtMainPage = false;
    },
    // convertFavoriteLocalStorage: (state, {payload}) => {
    //   state.favoriteLocalStorange = payload;
    // }
  },
  extraReducers: {
    [getGenericRecipes.pending]: (state, _action) => {
      state.loading = true;
    },
    [getGenericRecipes.fulfilled]: (state, {payload}) => {
      state.searchedRecipes = payload;
      state.loading = false;
    },
    [getGenericRecipes.rejected]: (state) => {
      state.loading = false;
    },
  },
})

export const { setUserInfo, cancelAvoidFetch } = userReducer.actions;

// export const selectAvoidFetchingMainPage = (state) => state.user.avoidFetchAtMainPage;
// export const selectScore = (state) => state.player.score;
// export const selectCorrectAnswers = (state) => state.player.correctAnswers;

export default userReducer.reducer;