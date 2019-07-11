import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import Listing from './components/Listing';
import Detail from './components/Detail';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #081b23;
    color: #b8d8e6;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Listing path="/" />
        <Detail path="/movie/:movieId" />
      </Router>
    </>
  );
};

export default App;
