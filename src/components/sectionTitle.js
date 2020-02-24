/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { rem } from 'polished';

const Title = styled.h2`
  font-size: ${rem(24)};

  span {
    color: #878787;
    font-weight: normal;
  }
`;

export const SectionTitle = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);
