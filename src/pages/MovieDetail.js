/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Container, SectionTitle, Rating } from '../components';
import { getMovie, apiImage } from '../services/api';

const DetailSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 32px;
  margin-top: 32px;
  padding-bottom: 32px;

  img {
    grid-column: 1 / 2;
    width: 100%;
  }

  div {
    grid-column: 2 / 7;
  }
`;

// const StatsSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

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
        {movie && (
          <DetailSection>
            <img src={apiImage(movie.poster_path)} alt={movie.title} />
            <div>
              <SectionTitle>
                {movie.title}
                &nbsp;
                {movie.release_date && (
                  <span>({movie.release_date.split('-')[0]})</span>
                )}
              </SectionTitle>
              <p
                css={{
                  color: '#878787',
                  fontStyle: 'italic',
                  marginBottom: '32px',
                  marginTop: '-16px',
                }}
              >
                {movie.tagline}
              </p>
              <Rating rating={movie.vote_average} />
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </DetailSection>
        )}
      </Container>
    </React.Fragment>
  );
};
