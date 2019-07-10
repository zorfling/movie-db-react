import React from 'react';
import styled from 'styled-components';
import { format, parse } from 'date-fns';
import { Link } from '@reach/router';

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

const ScorePill = styled.span`
  background: ${props =>
    Number.parseInt(props.children, 10) > 75
      ? '#01d277'
      : Number.parseInt(props.children, 10) > 50
      ? '#4902a3'
      : '#D1225B'};
  border-radius: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  text-align: center;

  color: #ffffff;
  padding: 4px 8px;
  position: absolute;
  top: 4px;
  left: 5px;
`;

const ThumbnailWrapper = styled(Link)`
  position: relative;
  text-decoration: none;
`;

const Thumbnail = ({ movie }) => (
  <ThumbnailWrapper to={`/movie/${movie.id}`}>
    <RoundedImage src={movie.poster_url} alt="" />
    <Title>{movie.title}</Title>
    <ReleaseDate>{format(parse(movie.release_date), 'MMMM YYYY')}</ReleaseDate>
    <ScorePill>{movie.vote_average * 10}%</ScorePill>
  </ThumbnailWrapper>
);
export default Thumbnail;
