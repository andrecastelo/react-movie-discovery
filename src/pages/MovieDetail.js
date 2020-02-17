/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Container, SectionTitle } from '../components';
import { getMovie } from '../services/api';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovie(id);
      if (data) {
        setMovie(data);
      }
    };

    if (!movie) {
      fetchMovie();
    }
  }, [id, movie]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        {movie && <SectionTitle>{movie.title}</SectionTitle>}
      </Container>
    </React.Fragment>
  );
};
