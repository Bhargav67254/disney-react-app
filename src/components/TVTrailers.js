import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../links/Axios";
import YouTube from "react-youtube";

const API_KEY = "your tmdb-api";

const TVTrailers = ({ video_id, title }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        `tv/${video_id}/videos?api_key=${API_KEY}&language=en-US`
      );

      setVideos(response.data.results);
      console.log(response.data.results);
    };
    fetchVideos();
  }, [video_id]);

  const opts = {
    height: "300",
    width: "500",
    playerVars: {},
  };
  return (
    <>
      {videos.length > 0 && (
        <Container>
          <h1>{title}</h1>
          <Videos>
            {videos.map((video) => {
              const { key } = video;
              return (
                <Trailer key={video.id}>
                  {key && <YouTube videoId={key} opts={opts} />}
                </Trailer>
              );
            })}
          </Videos>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  h1 {
    color: white;
  }
`;

const Videos = styled.div`
  margin: 10px 15px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
const Trailer = styled.div`
  margin: 20px;
`;
export default TVTrailers;
