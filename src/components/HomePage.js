import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import Logos from "./Logos";
import Results from "./Results";
import movies from "../links/Movies";
import ResultPageTwo from "./ResultPageTwo";
const HomePage = () => {
  return (
    <Container>
      <Slider />
      <Logos />
      <Results fetchURL={movies.popularMovie} title={"recommanded for you"} />
      <ResultPageTwo fetchURL={movies.popular} />
      <Results fetchURL={movies.upcomingMovie} title={"new to disney+"} />
      <ResultPageTwo fetchURL={movies.airing_today} />
      <Results fetchURL={movies.top_ratedMovie} title={"top on disney+"} />
      <ResultPageTwo fetchURL={movies.top_rated} />
    </Container>
  );
};

const Container = styled.div``;
export default HomePage;
