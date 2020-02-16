/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from '@emotion/styled';
import { discover, apiImage } from '../services/api';
import { Container } from '../components';

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

const MovieList = ({ movies }) => (
  <div css={{ marginTop: rem(96) }}>
    <h2 css={{ fontSize: rem(24) }}>Popular Movies</h2>
    <List>
      <TopMovie>
        <img src={apiImage(movies[0].poster_path)} alt={movies[0].title} />
      </TopMovie>
      {movies.slice(1, 9).map(movie => (
        <li key={movie.id}>
          <img src={apiImage(movie.poster_path)} alt={movie.title} />
        </li>
      ))}
    </List>
  </div>
);

export const Discovery = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await discover();
      setMovies(movies);
    };

    getMovies();
  }, [movies]);

  return (
    <Container>
      {movies && (
        <>
          <MovieList movies={movies} />
        </>
      )}
    </Container>
  );
};
