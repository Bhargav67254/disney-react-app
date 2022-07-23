import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import axios from "../links/Axios";

const imageURL = "https://image.tmdb.org/t/p/original/";

const ResultPageTwo = ({ fetchURL, resultTwo }) => {
  const [TvList, setTvList] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchURL);
      setTvList(response.data.results);
    }
    fetchMovies();
  }, [fetchURL]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(resultTwo);
      setTvList(response.data.results);
    }
    fetchMovies();
  }, [resultTwo]);

  return (
    <Container>
      {TvList.map((tvs) => {
        return (
          <Poster to={`/tv-details/${tvs.id}`} key={tvs.id}>
            {tvs.backdrop_path && (
              <img src={`${imageURL}${tvs.backdrop_path}`} alt="" />
            )}
            <MovieDetails>
              <p>{tvs.name || tvs.title}</p>
              <p>{tvs.release_date || tvs.first_air_date}</p>
              <span>
                <Icon />
                <p>{tvs.vote_average}</p>
              </span>
            </MovieDetails>
          </Poster>
        );
      })}
    </Container>
  );
};

export default ResultPageTwo;

const Container = styled.div`
  width: 100%;
  margin-top: -50px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
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
