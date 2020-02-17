/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from '@emotion/styled';
import { FaFire } from 'react-icons/fa';

import { discover, search } from '../services/api';
import { Container, Header, EmptyMovie, Movie } from '../components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(6, 1fr);
  grid-gap: 32px;
  list-style-type: none;

  li {
    img {
      width: 100%;
    }
  }
`;

const TopMovie = styled.li`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
`;

const MovieItem = ({ movie, ...props }) => (
  <li css={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
    {movie.poster_path ? <Movie movie={movie} /> : <EmptyMovie movie={movie} />}
  </li>
);

const MovieList = ({ movies }) => (
  <React.Fragment>
    <h2 css={{ fontSize: rem(24) }}>
      <FaFire css={{ color: 'red', marginRight: 8 }} />
      Popular Movies
    </h2>
    {movies && (
      <List>
        <TopMovie>
          <Movie movie={movies[0]} />
        </TopMovie>
        {movies.slice(1, 9).map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    )}
  </React.Fragment>
);

const ResultList = ({ movies }) => (
  <React.Fragment>
    <h2 css={{ fontSize: rem(24) }}>Search Results</h2>
    {movies && (
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    )}
  </React.Fragment>
);

export const Main = () => {
  const [movies, setMovies] = useState(undefined);
  const [isSearch, setSearchMode] = useState(false);

  const getMovies = async () => {
    const movies = await discover();
    setMovies(movies);
    setSearchMode(false);
  };

  const getSearch = async searchValue => {
    if (searchValue) {
      const results = await search(searchValue);
      setMovies(results);
      setSearchMode(true);
    } else {
      getMovies();
    }
  };

  useEffect(() => {
    if (!movies) {
      getMovies();
    }
  }, [movies]);

  return (
    <React.Fragment>
      <Header onSearch={getSearch} />
      <Container>
        <div css={{ margin: `${rem(96)} 0` }}>
          {isSearch ? (
            <ResultList movies={movies} />
          ) : (
            <MovieList movies={movies} />
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};
