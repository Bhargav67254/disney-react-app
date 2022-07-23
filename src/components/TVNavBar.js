import React from "react";
import movies from "../links/Movies";
import styled from "styled-components";

const TVNavBar = ({ setResultTwo }) => {
  return (
    <Container>
      <p onClick={() => setResultTwo(movies.airing_today)}>up coming</p>
      <p onClick={() => setResultTwo(movies.popular)}>popular</p>
      <p onClick={() => setResultTwo(movies.top_rated)}>top rated</p>
      <p onClick={() => setResultTwo(movies.action_adventure)}>Acton</p>
      <p onClick={() => setResultTwo(movies.animation)}>Animation</p>
      <p onClick={() => setResultTwo(movies.action_adventure)}>Adventure</p>
      <p onClick={() => setResultTwo(movies.comedy)}>comedy</p>
      <p onClick={() => setResultTwo(movies.crime)}>crime</p>
      <p onClick={() => setResultTwo(movies.documentary)}>documentart</p>
      <p onClick={() => setResultTwo(movies.drama)}>drama</p>
      <p onClick={() => setResultTwo(movies.family)}>family</p>
      <p onClick={() => setResultTwo(movies.kids)}>fantasy</p>
      <p onClick={() => setResultTwo(movies.mistery)}>mystery</p>
      <p onClick={() => setResultTwo(movies.reality)}>reality</p>
      <p onClick={() => setResultTwo(movies.sci_fi_and_fantasy)}>Sci-Fi</p>
      <p onClick={() => setResultTwo(movies.war_and_politics)}>war</p>
      <p onClick={() => setResultTwo(movies.western)}>western</p>
    </Container>
  );
};

export default TVNavBar;

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
