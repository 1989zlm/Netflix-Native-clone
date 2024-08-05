import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trending: [],
    upcoming: [],
    topRated: [],
    movieDetail: {},
    movieCredits: [],
    movieSimilar: [],
    personDetail: {},
    personCredits: [],
    searchResults: [],
    loading: false,
    error: false,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setTrendingState: (state, action) => {
            //console.log('action', action)
            state.trending = action.payload;
        },
        setUpcomingState: (state, action) => {
            //  console.log('action', action)
            state.upcoming = action.payload;

        },
        setTopRatedState: (state, action) => {
            //  console.log('action', action)
            state.topRated = action.payload;
        },
        setMovieDetailState: (state, action) => {
            // console.warn('action', action.payload)
            state.movieDetail = action.payload;
        },
        setMovieCreditState: (state, action) => {
            //   console.warn('action', action.payload)
            state.movieCredits = action.payload;
        },
        setSimilarMovieState: (state, action) => {
            //console.warn('action', action.payload)
            state.movieSimilar = action.payload;
        },
        setPersonDetailState: (state, action) => {
            //console.log(action) 
            //state içindeki payloadı persondetailstate eşitliyoruz
            state.personDetail = action.payload;
        },
        setPersonMovieCreditsState: (state, action) => {
            state.personCredits = action.payload;
        },
        setSearchResultsState: (state, action) => {
            state.searchResults = action.payload;
        }
    },
});

export const {
    setTopRatedState,
    setTrendingState,
    setUpcomingState,
    setMovieDetailState,
    setMovieCreditState,
    setSimilarMovieState,
    setPersonDetailState,
    setPersonMovieCreditsState,
    setSearchResultsState,
} = movieSlice.actions;

export default movieSlice.reducer;