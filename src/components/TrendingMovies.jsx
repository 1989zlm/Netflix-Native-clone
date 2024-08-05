import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetTrendingMovies} from '../app/actions/movieAction';
import {getTrendingState} from '../app/movieSelector';
//import Carousel from 'react-native-snap-carousel';
// import MovieCard from './MovieCard';

export default function TrendingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTrendingMovies());
  }, [dispatch]);

  const trendingMovies = useSelector(getTrendingState());
  //console.warn(trendingMovies);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
