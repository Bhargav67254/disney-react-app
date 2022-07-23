import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import axios from "../links/Axios";

const imageURL = "https://image.tmdb.org/t/p/original/";

const Results = ({ result, fetchURL, title }) => {
  const [movieList, setMoviesList] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchURL);
      setMoviesList(response.data.results);
    }
    fetchMovies();
  }, [fetchURL]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(result);
      setMoviesList(response.data.results);
    }
    fetchMovies();
  }, [result]);

  return (
    <>
      <h1
        style={{
          color: "whitesmoke",
          letterSpacing: "1.5px",
          fontWeight: "500",
          textTransform: "capitalize",
          marginLeft: "20px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h1>
      <Container>
        {movieList.map((movies) => {
          return (
            <Poster to={`/movie-details/${movies.id}`}>
              {movies.backdrop_path && (
                <img src={`${imageURL}${movies.backdrop_path}`} alt="" />
              )}
              <MovieDetails>
                <p>{movies.name || movies.title}</p>
                <p>{movies.release_date || movies.first_air_date}</p>
                <span>
                  <Icon />
                  <p>{movies.vote_average}</p>
                </span>
              </MovieDetails>
            </Poster>
          );
        })}
      </Container>
    </>
  );
};

export default Results;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
  h1 {
    color: white;
  }
`;

const MovieDetails = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20px;
  display: none;
  p {
    color: white;
    letter-spacing: 2px;
    font-size: 13px;
    margin: 5px 0px;
    font-weight: 500;
  }
  span {
    display: flex;
    align-items: center;
    p {
      margin-left: 5px;
    }
  }
`;

const Poster = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 300px;
    margin: 10px 10px;
    border-radius: 5px;
  }

  :hover {
    ${MovieDetails} {
      display: flex;
      flex-direction: column;
      z-index: 100;
    }
    img {
      transition: all 800ms ease-out;
      transform: scale(1.2);
      opacity: 0.5;
      z-index: 1;
    }
  }
`;
const Icon = styled(ThumbUpOutlinedIcon)`
  color: whitesmoke;
`;
