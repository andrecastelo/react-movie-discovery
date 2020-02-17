/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FaImage } from 'react-icons/fa';
import theme from '../theme';
import { rem } from 'polished';

export const EmptyMovie = ({ movie, ...props }) => (
  <div
    css={{
      backgroundColor: '#99a',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
    }}
    {...props}
  >
    <FaImage css={{ margin: '0 auto', color: '#efefef', fontSize: rem(32) }} />
    <p
      css={{
        color: '#efefef',
        fontFamily: theme.alfaSlabFont,
        fontSize: rem(16),
        position: 'absolute',
        textAlign: 'right',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 8,
        margin: 0,
      }}
    >
      {movie.title}
    </p>
  </div>
);
