/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const Rating = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating);
  const halfStarCount = roundedRating % 2;
  const fullStarCount = Math.floor(roundedRating / 2);
  const emptyStarCount = Math.max(5 - (fullStarCount + halfStarCount), 0);

  return (
    <p css={{ fontSize: 16, color: 'red' }}>
      {[...Array(fullStarCount)].map((_, index) => (
        <FaStar key={`full_star-${index}`} />
      ))}
      {halfStarCount ? <FaStarHalfAlt /> : undefined}
      {[...Array(emptyStarCount)].map((_, index) => (
        <FaRegStar key={`empty_star-${index}`} />
      ))}
    </p>
  );
};
