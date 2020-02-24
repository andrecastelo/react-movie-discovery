import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '1200px')};
  margin: 0 auto;
`;
