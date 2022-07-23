import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import DetailPageTwo from "./components/DetailPageTwo";
import movies from "./links/Movies";
import DetailPage from "./components/DetailPage";
import LoginPage from "./components/LoginPage";
import MoviePage from "./components/MoviePage";
import HomePage from "./components/HomePage";
import TVShow from "./components/TVShow";
function App() {
  const [result, setResult] = useState(movies.upcomingMovie);
  const [resultTwo, setResultTwo] = useState(movies.airing_today);

  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/movies">
            <MoviePage result={result} setResult={setResult} />
          </Route>
          <Route path="/tv">
            <TVShow resultTwo={resultTwo} setResultTwo={setResultTwo} />
          </Route>
          <Route path={"/home"} component={HomePage} />
          <Route path="/movie-details/:id" component={DetailPage}></Route>
          <Route path="/tv-details/:id" component={DetailPageTwo}></Route>
          <Route exact path={"/"} component={LoginPage}></Route>
        </Switch>
      </Router>
    </Container>
  );
}
const Container = styled.div`
  overflow-x: hidden;
`;

export default App;
