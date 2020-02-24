/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Header, Container, SectionTitle, Rating } from '../components';
import { getMovie, apiImage } from '../services/api';

const DetailSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;
  padding-bottom: 32px;

  img {
    grid-column: 1 / 2;
    width: 100%;
  }

  div {
    grid-column: 2 / 4;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MovieDetail = () => {
  const { id } = useParams();
  const history = useHistory();
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
      <Container maxWidth={800} css={{ paddingBottom: 128 }}>
        <button
          onClick={history.goBack}
          css={css`
            margin-top: 32px;
            background: transparent;
            padding: 16px;
            cursor: pointer;
            border: 0;
            font-weight: bold;
          `}
        >
          &lt; Home
        </button>
        {movie && (
          <DetailSection>
            <img src={apiImage(movie.poster_path)} alt={movie.title} />
            <div>
              <StatsSection>
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
                      marginTop: '-16px',
                    }}
                  >
                    {movie.tagline}
                  </p>
                </div>
                <div css={{ marginLeft: '32px' }}>
                  <h3 css={{ marginBottom: '-8px' }}>User Score</h3>
                  <Rating rating={movie.vote_average} />
                </div>
              </StatsSection>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </DetailSection>
        )}
      </Container>
    </React.Fragment>
  );
};
