import React from "react";
import styled from "styled-components";

const Logos = () => {
  return (
    <Container>
      <Wrapper>
        <Disney>
          <img src="images/logo1.png" alt="" />
        </Disney>
        <Pixar>
          <img src="images/logo2.png" alt="" />
        </Pixar>
        <Marvel>
          <img src="images/logo3.png" alt="" />
        </Marvel>
        <StarWars>
          <img src="images/logo4.png" alt="" />
        </StarWars>
        <PRM>
          <img src="images/logo5.png" alt="" />
        </PRM>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 20px 20px 20px 5px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 0px 100px 0px 20px;
  column-gap: 20px;
  grid-template-columns: 20% 20% 20% 20% 20%;
  @media screen and (max-width: 950px) {
    grid-template-columns: 100%;
    row-gap: 30px;
    place-items: center;
    padding: 0;
    margin-left: 10px;
  }
`;
const Disney = styled.div`
  background-color: #232f4a;
  border-radius: 10px;
  display: flex;
  padding: 25px 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 19px -1px #000000;
  cursor: pointer;
  img {
    width: 80%;
    object-fit: contain;
  }
  @media Screen and (max-width: 950px) {
    & {
      min-width: 80%;
      padding: 100px 55px;
    }
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  &:hover {
    transition: all 1s;
    transform: scale(1.08);
  }
  &:hover {
    background-image: url("gif/01.gif");
    background-position: center;
    background-size: cover;
  }
`;
const Pixar = styled.div`
  background-color: #232f4a;
  border-radius: 10px;
  display: flex;
  padding: 25px 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 19px -1px #000000;
  cursor: pointer;

  img {
    width: 80%;
    object-fit: contain;
  }
  @media Screen and (max-width: 950px) {
    & {
      min-width: 80%;
      padding: 100px 55px;
    }
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  &:hover {
    transition: all 1s;
    transform: scale(1.08);
  }
  &:hover {
    background-image: url("gif/02.gif");
    background-position: center;
    background-size: cover;
  }
`;

const Marvel = styled.div`
  background-color: #232f4a;
  cursor: pointer;

  border-radius: 10px;
  display: flex;
  padding: 25px 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 19px -1px #000000;
  img {
    width: 80%;
    object-fit: contain;
  }
  @media Screen and (max-width: 950px) {
    & {
      min-width: 80%;
      padding: 100px 55px;
    }
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  &:hover {
    transition: all 1s;
    transform: scale(1.08);
  }
  &:hover {
    background-image: url("gif/03.gif");
    background-position: center;
    background-size: cover;
  }
`;
const StarWars = styled.div`
  background-color: #232f4a;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  padding: 25px 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 19px -1px #000000;
  img {
    width: 80%;
    object-fit: contain;
  }
  @media Screen and (max-width: 950px) {
    & {
      min-width: 80%;
      padding: 100px 55px;
    }
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  &:hover {
    transition: all 1s;
    transform: scale(1.08);
  }
  &:hover {
    background-image: url("gif/04.gif");
    background-position: center;
    background-size: cover;
  }
`;
const PRM = styled.div`
  background-color: #232f4a;
  border-radius: 10px;
  display: flex;
  padding: 25px 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 19px -1px #000000;
  cursor: pointer;
  img {
    width: 80%;
    object-fit: contain;
  }
  @media Screen and (max-width: 950px) {
    & {
      min-width: 80%;
      padding: 100px 55px;
    }
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  &:hover {
    transition: all 1s;
    transform: scale(1.08);
  }
  &:hover {
    background-image: url("gif/05.gif");
    background-position: center;
    background-size: cover;
  }
`;
export default Logos;
