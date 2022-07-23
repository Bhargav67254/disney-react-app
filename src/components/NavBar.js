import React from "react";
import movies from "../links/Movies";
import styled from "styled-components";
const NavBar = ({ setResult }) => {
  return (
    <Container>
      <p onClick={() => setResult(movies.upcomingMovie)}>up coming</p>
      <p onClick={() => setResult(movies.popularMovie)}>popular</p>
      <p onClick={() => setResult(movies.top_ratedMovie)}>top rated</p>
      <p onClick={() => setResult(movies.actionMovie)}>Acton</p>
      <p onClick={() => setResult(movies.animationMovie)}>Animation</p>
      <p onClick={() => setResult(movies.adventureMovie)}>Adventure</p>
      <p onClick={() => setResult(movies.comedyMovie)}>comedy</p>
      <p onClick={() => setResult(movies.crimeMovie)}>crime</p>
      <p onClick={() => setResult(movies.documentaryMovie)}>documentart</p>
      <p onClick={() => setResult(movies.dramaMovie)}>drama</p>
      <p onClick={() => setResult(movies.familyMovie)}>family</p>
      <p onClick={() => setResult(movies.fantasyMovie)}>fantasy</p>
      <p onClick={() => setResult(movies.historyMovie)}>history</p>
      <p onClick={() => setResult(movies.horrorMovie)}>horror</p>
      <p onClick={() => setResult(movies.musicMovie)}>music</p>
      <p onClick={() => setResult(movies.mysterymovie)}>mystery</p>
      <p onClick={() => setResult(movies.romancemovie)}>romance</p>
      <p onClick={() => setResult(movies.sci_fimovie)}>Sci-Fi</p>
      <p onClick={() => setResult(movies.tvmoviesmovie)}>Tv Movie</p>
      <p onClick={() => setResult(movies.thrillermovie)}>thriller</p>
      <p onClick={() => setResult(movies.warmovie)}>war</p>
      <p onClick={() => setResult(movies.westernmovie)}>western</p>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  margin: 30px;
  overflow-x: scroll;
  padding: 10px 0px;
  padding-right: 30px;
  width: 100%;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    --ms-overflow-style: none;
    scrollbar-width: none;
  }
  p {
    color: gray;
    margin: 5px 10px;
    letter-spacing: 1.5px;
    cursor: pointer;

    text-transform: capitalize;
  }
  p:hover {
    color: whitesmoke;
    transition: all 400ms;
  }
`;
