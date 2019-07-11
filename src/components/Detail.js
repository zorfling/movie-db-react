import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { parse, format } from 'date-fns';
import back from './back.svg';

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
  color: #e3f4fc;
`;

const SectionTitle = styled(Title)`
  grid-column: 1 / -1;
  margin: 0px;
  font-size: 20px;
  line-height: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #9fbbc7;
  grid-column: 1 / -1;
  margin-top: 0px;
`;

const BackgroundImage = styled.div`
  background: ${props => `url(${props.src})`};
  background-size: cover;
  min-height: 245px;
  width: 100%;
`;

const PosterImage = styled.img`
  width: 140px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5),
    0px 16px 32px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-top: -50px;
`;

const BackButton = styled.img`
  cursor: pointer;
  position: absolute;
  padding: 24px;
  top: 11px;
`;

const Metadata = styled.div`
  font-size: 12px;
  line-height: 21px;
`;

const Line = styled.hr`
  border: 1px solid #0f303d;
  box-sizing: border-box;
  grid-column: 1 / -1;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 12px 18px;
  grid-template-columns: 140px 1fr;
  justify-content: center;
  padding: 0px 20px;
`;

const formatRuntime = rawMinutes => {
  if (rawMinutes === null) {
    return '';
  }
  const hours = Math.floor(rawMinutes / 60);
  const minutes = rawMinutes % 60;

  return `${hours}h ${minutes} min`;
};

const Detail = ({ movieId }) => {
  const apiKey = '5bcd6828c355a3d1d04df87637510284';
  const apiBase = 'https://api.themoviedb.org/3';
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const configuration = await fetch(
        `${apiBase}/configuration?api_key=${apiKey}`
      )
        .then(response => response.json())
        .catch(e => console.log(e));

      const data = await fetch(`${apiBase}/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .catch(e => console.log(e));

      const movie = {
        ...data,
        poster_url:
          configuration.images.base_url +
          configuration.images.poster_sizes[1] +
          data.poster_path,
        backdrop_url:
          configuration.images.base_url +
          configuration.images.backdrop_sizes[1] +
          data.backdrop_path
      };

      setMovie(movie);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Link to="/">
        <BackButton src={back} />
      </Link>
      <BackgroundImage src={movie.backdrop_url} />
      <GridContainer>
        <PosterImage src={movie.poster_url} />
        <div>
          <Title>{movie.title}</Title>
          <Metadata>
            {format(parse(movie.release_date), 'YYYY')} •{' '}
            {movie.vote_average * 10}% User Score
            <br />
            {formatRuntime(movie.runtime)}
          </Metadata>
        </div>
        <Line />
        <SectionTitle>Overview</SectionTitle>
        <Description>{movie.overview}</Description>
      </GridContainer>
    </>
  );
};

export default Detail;
