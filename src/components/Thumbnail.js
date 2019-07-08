import React from 'react';
import styled from 'styled-components';
import { format, parse } from 'date-fns';

const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #e6f7ff;
`;

const ReleaseDate = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #a1d1e6;
`;

const RoundedImage = styled.img`
  border-radius: 7px;
  max-width: 100%;
`;

const Thumbnail = ({ movie }) => (
  <div>
    <RoundedImage src={movie.poster_url} alt="" />
    <Title>{movie.title}</Title>
    <ReleaseDate>{format(parse(movie.release_date), 'MMMM YYYY')}</ReleaseDate>
  </div>
);
export default Thumbnail;
