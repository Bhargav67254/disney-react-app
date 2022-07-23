import React from "react";
import styled from "styled-components";
import TVNavBar from "./TVNavBar";
import ResultPageTwo from "./ResultPageTwo";

const TVShow = ({ resultTwo, setResultTwo }) => {
  return (
    <Container>
      <TVNavBar setResultTwo={setResultTwo} style={{ margin: "20px" }} />
      <ResultPageTwo resultTwo={resultTwo} />
    </Container>
  );
};

export default TVShow;
const Container = styled.div``;
