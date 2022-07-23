import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "../links/Axios";
import MoviesCast from "./MoviesCast";
import MovieTrailer from "./MovieTrailer";
import TVCast from "./TVCast";
import TVTrailers from "./TVTrailers";

const imageURL = "https://image.tmdb.org/t/p/original/";
const API_KEY = "your tmdb-api";

const DetailPageTwo = () => {
  const [background, setBackground] = useState([]);
  const [production, setProduction] = useState([]);
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function FetchDetails() {
      const response = await axios
        .get(`tv/${id}?api_key=${API_KEY}&language=en-US`)
        .then(window.scroll(0, 0));

      setBackground(response.data);
      setProduction(response.data.production_companies);
      setGenre(response.data.genres);
      setLanguage(response.data.spoken_languages);
      console.log(response.data);
    }
    FetchDetails();
  }, [id]);

  return (
    <Container>
      <Background>
        {background.backdrop_path ? (
          <img src={`${imageURL}${background.backdrop_path}`} alt="" />
        ) : (
          <img src={`${imageURL}${background.poster_path}`} alt="" />
        )}
      </Background>
      <OverView>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <LeftSide>
          <img src={`${imageURL}${background.poster_path}`} alt="" />
          {background.title ? (
            <p>{background.title}</p>
          ) : (
            <p>{background.name}</p>
          )}
          <p>{background.first_air_date}</p>
          <p>{background.vote_average}</p>
          <Language>
            {language.map((speak) => {
              return <p key={speak.id}>{speak.english_name}</p>;
            })}
          </Language>
        </LeftSide>
        {/* ---------------------------------------------------------------------------------------------------- */}
        <RightSide>
          <Genres>
            {genre.map((genres) => {
              return <p key={genres.id}>{genres.name}</p>;
            })}
          </Genres>
          <h5>{background.overview}</h5>
          <Production>
            {production.map((company) => (
              <>
                {company.logo_path && (
                  <img
                    src={`${imageURL}${company.logo_path}`}
                    alt=""
                    key={company.id}
                  />
                )}
              </>
            ))}
          </Production>
        </RightSide>
      </OverView>
      <TVCast cast_id={id} />;
      <TVTrailers video_id={id} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Background = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    z-index: -1;
  }
`;
const OverView = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  img {
    width: 200px;
    margin: 10px 0px;
    border-radius: 10px;
    box-shadow: 0px 8px 19px -1px #000000;
  }
  p {
    color: white;
    font-weight: bolder;
    letter-spacing: 2px;
    margin: 10px 5px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Language = styled.div`
  display: flex;
  p {
    margin: 10px 5px;
  }
`;
const RightSide = styled.div`
  margin-left: 200px;
  padding: 20px;
  width: 100%;
  h5 {
    margin-top: 20px;
    color: white;
    width: 600px;
    letter-spacing: 2px;
    line-height: 30px;
    padding: 5px;
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  p {
    color: white;
    font-weight: bolder;
    letter-spacing: 2px;
    margin: 0px 10px;
  }
`;
const Production = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 120px;
    background-color: white;
    margin: 5px 10px;
    border-radius: 5px;
    padding: 2px;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export default DetailPageTwo;
