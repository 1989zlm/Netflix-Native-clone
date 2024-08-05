
//! BURADA APİ İSTEKLERİ ATILIYOR


import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieCredits, getMovieCreditsPerson, getMovieDetails, getPersonDetails, getSearchMovies, getSimilarMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../../api";
import { setMovieCreditState, setMovieDetailState, setPersonDetailState, setPersonMovieCreditsState, setSearchResultsState, setSimilarMovieState, setTopRatedState, setTrendingState, setUpcomingState } from "../slices/movieSlice";

export const GetTrendingMovies = createAsyncThunk(
    'movie/getTrendingMovies',
    async (_, { dispatch }) => {
        const response = await getTrendingMovies();
        console.log(response)
        dispatch(setTrendingState(response.results))
    }
)

export const GetUpcomingMovies = createAsyncThunk(
    'movie/getUpcomingMovies',
    async (_, { dispatch }) => {
        const response = await getUpcomingMovies();
        //  console.log(response)
        dispatch(setUpcomingState(response.results))
    }
)

export const GetTopRatedMovies = createAsyncThunk(
    'movie/getTopRatedMovies',
    async (_, { dispatch }) => {
        const response = await getTopRatedMovies();
        dispatch(setTopRatedState(response.results));
    }
)

export const GetMovieDetails = createAsyncThunk(
    'movie/getMovieDetails',
    async (id, { dispatch }) => {
        //  console.log(id)
        const response = await getMovieDetails(id)
        // console.log(response)
        dispatch(setMovieDetailState(response))
    }
)

export const GetMovieCredits = createAsyncThunk(
    'movie/getMovieCredits',
    async (id, { dispatch }) => {
        //console.log(id)
        const response = await getMovieCredits(id)
        //  console.log(response)
        dispatch(setMovieCreditState(response.cast))
    }
)

export const GetSimilarMoviesState = createAsyncThunk(
    'movie/getSimilarMovies',
    async (id, { dispatch }) => {
        //console.log(id)
        const response = await getSimilarMovies(id)
        //  console.log(response)
        dispatch(setSimilarMovieState(response.results))
    }
)
export const GetPersonDetails = createAsyncThunk(
    'movie/getPersonDetails',
    async (id, { dispatch }) => {//api isteği
        const response = await getPersonDetails(id);
        // console.log(response)
        dispatch(setPersonDetailState(response))
    }
)

export const GetMovieCreditsPerson = createAsyncThunk(
    'movie/getMovieCreditsPerson',
    async (id, { dispatch }) => {
        const response = await getMovieCreditsPerson(id)
        dispatch(setPersonMovieCreditsState(response.cast))
    }
)

export const GetSearchMovies = createAsyncThunk('movie/getSearchMovies', async (id, { dispatch }) => {
    const response = await getSearchMovies(id);
    //   console.log(response.results)
    dispatch(setSearchResultsState(response.results));
})