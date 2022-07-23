import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "../links/Axios";
import movies from "../links/Movies";

const imageURL = "https://image.tmdb.org/t/p/original/";

const LoginPage = () => {
  const [bannerOne, setBannerOne] = useState([]);
  const [bannerTwo, setBannerTwo] = useState([]);
  const [bannerThree, setBannerThree] = useState([]);
  const [bannerFour, setBannerFour] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(movies.upcomingMovie);
      setBannerOne(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(movies.actionMovie);
      setBannerTwo(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(movies.popular);
      setBannerThree(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(movies.airing_today);
      setBannerFour(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <Container>
      <TopPage>
        <img src="2.jpeg" alt="" />
        <TopPageHeader>
          <img src="1.png" alt="" />
          <p>
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </p>
          <DisneyButton>get the disney bundle</DisneyButton>
        </TopPageHeader>
        <Banner>
          <img src="logo1.png" alt="" />
          <p>Here just for Disney+? Get thousands of TV shows and movies.</p>
          <Button>start your free trial</Button>
        </Banner>
      </TopPage>

      <BottomPageHeader>
        <h1>All The TV You Love</h1>
        <p>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, kids shows, and more.
        </p>
        <Wrap>
          <Wrapper>
            <img
              src={
                `${imageURL}${bannerOne.backdrop_path}` ||
                `${imageURL}${bannerOne.poster_path}`
              }
              alt=""
            />
            <p>{bannerOne.name || bannerOne.title}</p>
          </Wrapper>
          <Wrapper>
            <img
              src={
                `${imageURL}${bannerTwo.backdrop_path}` ||
                `${imageURL}${bannerTwo.poster_path}`
              }
              alt=""
            />
            <p>{bannerTwo.name || bannerTwo.title}</p>
          </Wrapper>
          <Wrapper>
            <img
              src={
                `${imageURL}${bannerThree.backdrop_path}` ||
                `${imageURL}${bannerThree.poster_path}`
              }
              alt=""
            />
            <p>{bannerThree.name || bannerThree.title}</p>
          </Wrapper>
          <Wrapper>
            <img
              src={
                `${imageURL}${bannerFour.backdrop_path}` ||
                `${imageURL}${bannerFour.poster_path}`
              }
              alt=""
            />
            <p>{bannerFour.name || bannerFour.title}</p>
          </Wrapper>
        </Wrap>
      </BottomPageHeader>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden !important;
`;

const TopPage = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const TopPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  width: 100%;

  img {
    width: 90%;
    object-fit: contain;
    height: 100px;
  }
  p {
    color: whitesmoke;
    letter-spacing: 2px;
    font-size: 25px;
    font-weight: 600;
    width: 50%;
    text-align: center;
    margin: 30px 0px;
  }
`;
const DisneyButton = styled.div`
  text-transform: capitalize;
  color: black;
  background-color: whitesmoke;
  letter-spacing: 2px;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    transition: all 400ms ease-in-out;
  }
`;
const Banner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  bottom: 0;
  justify-content: space-around;
  padding: 30px 0px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  img {
    height: 100px;
    width: 150px;
    object-fit: contain;
    cursor: pointer;
  }
  p {
    color: whitesmoke;
    letter-spacing: 2px;
    font-weight: bold;
    width: 20%;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
const Button = styled.div`
  background-color: whitesmoke;
  color: black;
  letter-spacing: 2px;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 30px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer !important;
  :hover {
    background-color: lightgray;
    transition: all 400ms ease-in-out;
  }
`;
const BottomPageHeader = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  margin-top: 20px;
  h1 {
    color: white;
    margin: 50px 0px;
    font-size: 40px;
    text-align: center;
    letter-spacing: 2px;
  }
  p {
    color: white;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 50px;
    font-size: 20px;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: relative;
  p {
    position: absolute;
    bottom: 5px;
    left: 30px;
    width: 250px;
    z-index: 10;
  }
  img {
    width: 300px;
    border-radius: 10px;
    height: 500px;
    object-fit: cover;
    margin: 10px 10px;
    opacity: 0.6;
  }
`;
