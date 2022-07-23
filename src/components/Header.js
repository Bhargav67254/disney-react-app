import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setUserLogOutState,
} from "../features/user/userSlice";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

// --------------------------------------------------------------------------------------------------------
const Header = () => {
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  function GoogleLogin() {
    if (!username) {
      auth.signInWithPopup(provider).then((response) => {
        dispatch(
          setUserLoginDetails({
            name: response.user.displayName,
            email: response.user.email,
            photo: response.user.photoURL,
          })
        );
        history.push("/home");
      });
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, []);

  function SingOut() {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState());
    });
    history.push("/");
  }

  return (
    <Container>
      {username ? (
        <>
          <RightHeader>
            <img src="logo1.png" alt="" onClick={() => setSidebar(!sidebar)} />
          </RightHeader>
          <LeftHeader sidebar={sidebar}>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <Wrapper onClick={() => setSidebar(false)}>
                <Home />
                <p>Home</p>
              </Wrapper>
            </Link>
            <Link to={"/tv"} style={{ textDecoration: "none" }}>
              <Wrapper onClick={() => setSidebar(false)}>
                <LiveTv />
                <p>TV</p>
              </Wrapper>
            </Link>
            <Link to={"/movies"} style={{ textDecoration: "none" }}>
              <Wrapper onClick={() => setSidebar(false)}>
                <Movie />
                <p>Movie</p>
              </Wrapper>
            </Link>
            <Wrapper onClick={() => setSidebar(false)}>
              <Searchicon />
              <p>search</p>
            </Wrapper>
            <Wrapper onClick={() => setSidebar(false)}>
              <Exit onClick={SingOut} />
              <p>Log Out</p>
            </Wrapper>
          </LeftHeader>
          <User>
            <UserIcon src={userphoto} />
            <p>{username}</p>
          </User>
        </>
      ) : (
        <Login>
          <img src="logo1.png" alt="" />
          <LoginButton onClick={GoogleLogin}>Log In</LoginButton>
        </Login>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
  padding: 10px 0px;
`;

const LeftHeader = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 850px) {
    position: fixed;
    left: 0;
    flex-direction: column;
    top: 80px;
    width: 100px;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    transition: all 900ms ease-in-out;
    transform: ${(props) =>
      props.sidebar ? " translateX(0)" : " translateX(-100%)"};
  }
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 0.2;
  img {
    width: 100px;
    object-fit: contain;
    margin: 0px 30px;
    cursor: pointer;
    background: transparent;
  }
  @media screen and (max-width: 850px) {
    justify-content: space-between;
    flex: 1;
  }
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;
  margin-top: 5px;

  p {
    color: whitesmoke;
    text-transform: capitalize;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-align: center;
  }
`;

const Home = styled(HomeIcon)``;
const Movie = styled(MovieIcon)``;
const LiveTv = styled(LiveTvIcon)``;
const Searchicon = styled(SearchIcon)``;
const Exit = styled(ExitToAppIcon)``;
const UserIcon = styled(Avatar)`
  background-color: black !important;
  color: white !important;
`;

const Wrapper = styled.div`
  text-transform: capitalize;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  width: 80px;
  margin: 0px 10px;
  @media screen and (max-width: 850px) {
    margin: 20px 0px;
  }

  @keyframes bouncing {
    0%,
    30%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(6px);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(6px);
    }
  }
  p {
    color: whitesmoke;
    font-size: 13px;
    letter-spacing: 1.5px;
    margin-top: 5px;
  }
  :hover {
    cursor: pointer;

    ${Home} {
      animation: bouncing infinite 1.9s;
    }
    ${Movie} {
      animation: bouncing infinite 1.9s;
    }
    ${LiveTv} {
      animation: bouncing infinite 1.9s;
    }
    ${Searchicon} {
      animation: bouncing infinite 1.9s;
    }
    ${Exit} {
      animation: bouncing infinite 1.9s;
    }
  }
`;
const LoginButton = styled(Button)`
  color: whitesmoke !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  padding: 10px 20px !important;
  margin-right: 30px !important;
`;
const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    width: 150px;
    margin: 0px 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    img {
      margin: 0px 10px;
    }
    ${LoginButton} {
      margin-right: 0px !important;
    }
  }
`;
