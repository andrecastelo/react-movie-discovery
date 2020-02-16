import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { discover } from '../services/api';

export const Discovery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await discover();
      setMovies(movies);
    };

    getMovies();
  }, []);

  console.log({ movies });

  return <Header></Header>;
};
