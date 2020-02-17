/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from '@emotion/styled';
import { FaFire, FaSearch } from 'react-icons/fa';

import { discover, search } from '../services/api';
import {
  Container,
  Header,
  EmptyMovie,
  Movie,
  SectionTitle,
} from '../components';
import { useHistory } from 'react-router-dom';

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

const MovieItem = ({ movie, isMain = false, ...props }) => {
  const history = useHistory();
  const redirect = () => {
    history.push(`/movies/${movie.id}`);
  };

  const mainStyle = isMain
    ? {
        gridColumn: '1 / 3',
        gridRow: '1 / 3',
      }
    : {};

  return (
    <li
      css={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        ...mainStyle,
      }}
      onClick={redirect}
    >
      {movie.poster_path ? (
        <Movie movie={movie} />
      ) : (
        <EmptyMovie movie={movie} />
      )}
    </li>
  );
};

const MovieList = ({ movies }) => (
  <React.Fragment>
    <SectionTitle>
      <FaFire css={{ color: 'red', marginRight: 8 }} />
      Popular Movies
    </SectionTitle>
    {movies && (
      <List>
        <MovieItem movie={movies[0]} isMain={true} />

        {movies.slice(1, 9).map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    )}
  </React.Fragment>
);

const ResultList = ({ movies }) => (
  <React.Fragment>
    <SectionTitle>
      <FaSearch css={{ marginRight: 8 }} />
      Search Results
    </SectionTitle>
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
