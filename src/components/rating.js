/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FaStar, FaRegStar } from 'react-icons/fa';

export const Rating = ({ rating, onClick }) => {
  const roundedRating = Math.round(rating);
  const starStyle = { cursor: onClick ? 'pointer' : 'auto' };

  return (
    <p css={{ fontSize: 16, color: 'red' }}>
      {roundedRating && roundedRating >= 0 ? (
        <FaStar css={starStyle} onClick={() => onClick(0)} />
      ) : (
        <FaRegStar css={starStyle} onClick={() => onClick(0)} />
      )}

      {roundedRating && roundedRating >= 2 ? (
        <FaStar css={starStyle} onClick={() => onClick(2)} />
      ) : (
        <FaRegStar css={starStyle} onClick={() => onClick(2)} />
      )}

      {roundedRating && roundedRating >= 4 ? (
        <FaStar css={starStyle} onClick={() => onClick(4)} />
      ) : (
        <FaRegStar css={starStyle} onClick={() => onClick(4)} />
      )}

      {roundedRating && roundedRating >= 6 ? (
        <FaStar css={starStyle} onClick={() => onClick(6)} />
      ) : (
        <FaRegStar css={starStyle} onClick={() => onClick(6)} />
      )}

      {roundedRating && roundedRating >= 8 ? (
        <FaStar css={starStyle} onClick={() => onClick(8)} />
      ) : (
        <FaRegStar css={starStyle} onClick={() => onClick(8)} />
      )}
    </p>
  );
};
