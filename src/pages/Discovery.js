import React, { useEffect, useState } from 'react';
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

  return (
    <div>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
