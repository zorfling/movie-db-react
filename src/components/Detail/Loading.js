import React from 'react';
import styled from 'styled-components';

import logo from '../../images/tmdb-logo.svg';

const Spinner = styled.img`
  width: 100px;
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Centred = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
`;

const Loading = () => {
  return (
    <Centred>
      <Spinner src={logo} />
    </Centred>
  );
};

export default Loading;
