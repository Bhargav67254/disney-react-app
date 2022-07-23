import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "../links/Axios";
import movies from "../links/Movies";

const imageURL = "https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [bannerOne, setBannerOne] = useState([]);
  const [bannerTwo, setBannerTwo] = useState([]);
  const [bannerThree, setBannerThree] = useState([]);
  const [bannerFour, setBannerFour] = useState([]);

  useEffect(() => {
    async function fetchBannerOne() {
      const response = await axios.get(movies.adventureMovie);
      setBannerOne(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchBannerOne();
  }, []);

  useEffect(() => {
    async function fetchBannerTwo() {
      const response = await axios.get(movies.comedyMovie);
      setBannerTwo(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchBannerTwo();
  }, []);

  useEffect(() => {
    async function fetchBannerThree() {
      const response = await axios.get(movies.actionMovie);
      setBannerThree(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchBannerThree();
  }, []);

  useEffect(() => {
    async function fetchBannerFour() {
      const response = await axios.get(movies.horrorMovie);
      setBannerFour(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchBannerFour();
  }, []);

  const settings = {
    dots: false,
    Infinite: true,
    speed: 3500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <Container>
      <Master {...settings}>
        <Wrapper>
          <img src={`${imageURL}${bannerOne.backdrop_path}`} alt="" />
          <Overview>
            <h1>{bannerOne.title || bannerOne.name}</h1>
            {<h1>{bannerOne.overview}</h1>}
          </Overview>
        </Wrapper>

        <Wrapper>
          <img src={`${imageURL}${bannerTwo.backdrop_path}`} alt="" />
          <Overview>
            <h1>{bannerTwo.title || bannerTwo.name}</h1>
            {<h1>{bannerTwo.overview}</h1>}
          </Overview>
        </Wrapper>

        <Wrapper>
          <img src={`${imageURL}${bannerThree.backdrop_path}`} alt="" />
          <Overview>
            <h1>{bannerThree.title || bannerThree.name}</h1>
            {<h1>{bannerThree.overview}</h1>}
          </Overview>
        </Wrapper>

        <Wrapper>
          <img src={`${imageURL}${bannerFour.backdrop_path}`} alt="" />
          <Overview>
            <h1>{bannerFour.title || bannerFour.name}</h1>
            {<h1>{bannerFour.overview}</h1>}
          </Overview>
        </Wrapper>
      </Master>
    </Container>
  );
};
const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  height: 520px;
  overflow-y: hidden;
  padding-bottom: 20px;
  box-shadow: none;
`;
const Master = styled(Sliders)`
  .slick-list {
    overflow: visible;
  }
  width: 92%;
  margin: 0px 50px;
  height: 500px;
  box-shadow: none;
`;
const Wrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 500px;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    object-fit: cover;
    padding: 0px 10px;
    position: absolute;
    z-index: -1;
  }
`;
const Overview = styled.div`
  position: absolute;
  width: 50%;
  height: 450px;
  left: 0;
  margin-top: 50px;
  overflow-y: auto;

  @media screen and (max-width: 750px) {
    width: 100%;
    margin-top: 20px;
  }
  h1 {
    color: white;
    text-align: center;
    margin: 20px;
    margin-left: 50px;
    font-size: 15px;
    z-index: 1;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
`;

export default Slider;
