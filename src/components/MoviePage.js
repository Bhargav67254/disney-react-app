import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Results from "./Results";
const MoviePage = ({ result, setResult }) => {
  return (
    <Container>
      <NavBar setResult={setResult} />
      <Results result={result} />
    </Container>
  );
};

export default MoviePage;

const Container = styled.div``;
