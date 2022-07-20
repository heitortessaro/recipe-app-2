import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  searchBarActive: false,
  loading: false,
  searchedRecepies: [],
  searchedIngredients: [],
  avoidFetchAtMainPage: false,
  recepieID: '',
  favoriteLocalStorange: [],
}

export const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, _action) => {
      state.loading = true;
    },
    saveSearchedRecepies: (state, {payload}) => {
      state.searchedRecepies = payload;
      state.loading = false;
    },
    handleSearchBar: (state, _action) => {
      state.searchBarActive = !state.searchBarActive;
    },
    saveSearchedIngredients: (state, {payload}) => {
      state.searchedIngredients = payload;
      state.loading = false;
    },
    setAvoidFetchingMainPage: (state, _action) => {
      state.avoidFetchAtMainPage = true;
    },
    cancelAvoidFetchingMainPage: (state, _action) => {
      state.avoidFetchAtMainPage = false;
    },
    convertFavoriteLocalStorage: (state, {payload}) => {
      state.favoriteLocalStorange = payload;
    }
  },
  // extraReducers: {
  //   [getToken.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [getToken.fulfilled]: (state, {payload}) => {
  //     state.token = payload;
  //     state.loading = false;
  //   },
  // },
})

// export const { saveLogin, updateCorrectAnswers, updateScore, resetCorrectAnswers, resetScore } = playerReducer.actions;

// export const selectName = (state) => state.player.name;
// export const selectScore = (state) => state.player.score;
// export const selectCorrectAnswers = (state) => state.player.correctAnswers;

export default userReducer.reducer;