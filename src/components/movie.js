/** @jsx jsx */
import { jsx } from '@emotion/core';
import { apiImage } from '../services/api';

export const Movie = ({ movie, ...props }) => (
  <img src={apiImage(movie.poster_path)} alt={movie.title} {...props} />
);
