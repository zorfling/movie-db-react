import React from 'react';

import styled from 'styled-components';
import logo from '../../images/tmdb-logo.svg';

const LogoWrapper = styled.div`
  background: radial-gradient(
    312.01px at 53.46% -21.35%,
    rgba(5, 112, 172, 0.46) 0%,
    rgba(8, 27, 35, 0) 100%
  );
  display: grid;
  align-items: center;
  justify-items: center;
  height: 192px;
`;

const LogoImage = styled.img`
  max-width: 66px;
  padding: 15px;
`;

const Line = styled.div`
  position: absolute;
  background: rgba(1, 210, 119, 0.83);
  border-radius: 3.5px;
  transform: rotate(-45deg);
  z-index: -999;
`;

const Line1 = styled(Line)`
  left: 6.13%;
  right: 50.67%;
  top: 1.89%;
  bottom: 97.76%;
`;

const Line2 = styled(Line)`
  left: 6.13%;
  right: 50.67%;
  top: 4.26%;
  bottom: 95.39%;
`;

const Line3 = styled(Line)`
  left: -2.13%;
  right: 58.93%;
  top: 16.09%;
  bottom: 83.56%;
`;

const Line4 = styled(Line)`
  left: 74.4%;
  right: 5.26%;
  top: 2.68%;
  bottom: 96.97%;
`;

const Line5 = styled(Line)`
  left: 71.47%;
  right: -3.48%;
  top: 5.83%;
  bottom: 93.82%;
`;

const Line6 = styled(Line)`
  left: 53.27%;
  right: -7.47%;
  top: 16.61%;
  bottom: 83.04%;
`;

const Logo = () => (
  <LogoWrapper>
    <Line1 />
    <Line2 />
    <Line3 />
    <Line4 />
    <Line5 />
    <Line6 />
    <LogoImage src={logo} />
  </LogoWrapper>
);
export default Logo;
