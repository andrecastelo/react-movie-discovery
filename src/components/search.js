/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { rem } from 'polished';

const StyledInput = styled.input`
  background-color: white;
  padding: ${rem(16)};
  border-radius: ${rem(25)};
  border: 0;
  padding-right: ${rem(32)};

  & ::placeholder {
    color: gray;
    font-style: italic;
  }
`;

const SearchButton = styled.button`
  border: 0;
  padding: ${rem(16)};
  background: transparent;
  cursor: pointer;
`;

export const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('');

  return (
    <div css={{ position: 'relative', display: 'inline-block' }}>
      <StyledInput
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search..."
      />
      <SearchButton css={{ position: 'absolute', top: 0, right: 0 }}>
        <FaSearch />
      </SearchButton>
    </div>
  );
};
