import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const imageURL = "https://image.tmdb.org/t/p/original/";

const API_KEY = "your tmdb-api";

const TVCast = ({ cast_id }) => {
  const [TVCast, setTVCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${cast_id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setTVCast(response.data.cast);
    };
    fetchCast();
  }, [cast_id]);
  return (
    <Container>
      <h1>cast</h1>
      <Cast>
        {TVCast.map((cast) => {
          return (
            <>
              {cast.profile_path && (
                <>
                  <Image key={cast.id}>
                    <img src={`${imageURL}${cast.profile_path}`} alt="" />
                    <Name>
                      <p>{cast.original_name}</p>
                      <p>{cast.character}</p>
                    </Name>
                  </Image>
                </>
              )}
            </>
          );
        })}
      </Cast>
    </Container>
  );
};
const Container = styled.div`
  margin: 20px;
  z-index: 1;
  text-transform: capitalize;
  h1 {
    color: white;
  }
`;
const Cast = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 5px 10px;
    border-radius: 10px;
  }
`;
const Name = styled.div`
  p {
    color: white;
    margin: 5px 5px;
    font-size: 12px;
    text-align: center;
  }
`;

export default TVCast;
