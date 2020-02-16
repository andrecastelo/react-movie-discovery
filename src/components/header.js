import React from 'react';
import styled from '@emotion/styled';
import headerImage from '../assets/images/header.jpg';
import theme from '../theme';
import { darken, rem } from 'polished';

const HeaderBackground = styled.div`
  padding: ${rem(32)};
  background: url('${headerImage}') center center no-repeat;
  background-size: cover;
  position: relative;
  height: 450px;
`;

const Title = styled.h1`
  font-family: ${theme.alfaSlabFont}, sans-serif;
  font-size: ${rem(36)};
  text-align: center;
  font-weight: normal;
  color: #fff;
  margin-top: ${rem(150)};
  margin-bottom: ${rem(25)};
`;

const Subtitle = styled.p`
  text-align: center;
  font-family: ${theme.latoFont}, sans-serif;
  font-size: ${rem(24)};
  color: ${darken(0.05, '#fff')};
`;

const DarkOverlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const Header = () => (
  <HeaderBackground>
    <DarkOverlay>
      <Title>Discover your next favorite movie.</Title>
      <Subtitle>Check out our award winning suggestions for February!</Subtitle>
    </DarkOverlay>
  </HeaderBackground>
);
