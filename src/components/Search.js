import React from 'react';
import styled from 'styled-components';

import searchIcon from './search.svg';

const SearchInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 22px;
  border: 0px;

  color: #01d277;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  padding-left: 18px;

  ::placeholder {
    color: #01d277;
  }

  width: calc(100% - 64px);
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 30px;
  padding: 16px;
  cursor: pointer;
`;

const Search = ({ placeholder }) => {
  return (
    <SearchWrapper>
      <SearchInput placeholder={placeholder} />
      <SearchIcon src={searchIcon} />
    </SearchWrapper>
  );
};

export default Search;
