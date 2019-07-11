import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
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
        <Home path="/" />
        <Detail path="/movie/:movieId" />
      </Router>
    </>
  );
};

export default App;
